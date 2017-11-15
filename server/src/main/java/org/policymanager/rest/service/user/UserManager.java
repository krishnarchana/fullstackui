package org.policymanager.rest.service.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;
import org.policymanager.db.DbConnection;

/**
 * User managing functions
 * 
 * @author gopikrishna
 *
 */
public class UserManager {

	static final Logger logger = Logger.getLogger(UserManager.class);

	Connection dbConnection = null;

	boolean isValid = true;

	public UserManager() {
		DbConnection database = DbConnection.getInstance();
		try {
			dbConnection = database.getConnection();
		} catch (Exception e) {
			logger.error("Failed to get connection.");
			dbConnection = null;
			setValid(false);
		}
	}

	public boolean isValid() {
		return isValid;
	}

	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}

	/**
	 * Get user
	 * 
	 * @param userId
	 * @return User <OR> ERROR <OR> null
	 */
	public User getUser(int userId) throws Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			return null;
		}
		
		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			return null;
		}

		User userObj = null;
		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM user WHERE user_id = ?");
			ps.setInt(1, userId);

			// (user_id INT AUTO_INCREMENT,
			// login VARCHAR(100),
			// name_1 VARCHAR(255),
			// name_2 VARCHAR(255),
			// address VARCHAR(255),
			// phone_1 VARCHAR(255),
			// email VARCHAR(255),
			// password VARCHAR(255),
			// dob DATE,
			// type INT(2),
			// UNIQUE(login),
			// PRIMARY KEY (user_id)

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				userObj = new User();
				userObj.setUser_id(rs.getInt("user_id"));
				userObj.setLogin(rs.getString("login"));
				userObj.setName_1(rs.getString("name_1"));
				userObj.setName_2(rs.getString("name_2"));
				userObj.setAddress(rs.getString("address"));
				userObj.setPhone(rs.getString("phone_1"));
				userObj.setEmail(rs.getString("email"));
				userObj.setPassword(rs.getString("password"));
				userObj.setDob(rs.getDate("dob"));
				userObj.setType(rs.getInt("type"));
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("User+ : " + userObj);
		return userObj;

	}
	
	/**
	 * Check whether the login already exists
	 * 
	 * @param login
	 * @return boolean
	 */
	public boolean loginExists(String login) throws Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			throw new Exception("No DB Connection");
		}
		
		if (login == null || login.length() < 1) {
			logger.warn("Invalid login name : " + login);
			throw new Exception("Invalid login name");
		}

		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM user WHERE login = ?");
			ps.setString(1, login);

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				return true;
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("No user exists with login : " + login);
		return false;
	}

	/**
	 * Add/Update User
	 * 
	 * @param user
	 * @param isUpdate
	 * @return <user_id> OR ERROR
	 */
	public int addUser(User userObj, boolean isUpdate) throws SQLException, Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			return -1;
		}
		
		int user_id = -1;

		if (userObj == null) {
			logger.warn("Invalid user object");
			return user_id;
		}

		try {
			String query = null;
			if (isUpdate) {
				query = " UPDATE user SET name_1 = ?, name_2 = ?, address = ?, phone_1 = ?, email = ?, password = ?, dob = ?, type = ? WHERE user_id = ?";
				logger.debug("Updating record");
			} else {
				// Insert record
				query = " INSERT INTO user(login, name_1, name_2, address, phone_1, email, password, dob, type)"
						+ " values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
				logger.debug("Inserting record");
			}

			// create the mysql insert preparedstatement
			PreparedStatement preparedStmt = dbConnection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

			if (!isUpdate) { // Add
				preparedStmt.setString(1, userObj.getLogin());
			}

			preparedStmt.setString(2, userObj.getName_1());
			preparedStmt.setString(3, userObj.getName_2());
			preparedStmt.setString(4, userObj.getAddress());
			preparedStmt.setString(5, userObj.getPhone());
			preparedStmt.setString(6, userObj.getEmail());
			preparedStmt.setString(7, userObj.getPassword());
			preparedStmt.setDate(8, userObj.getDob());
			preparedStmt.setInt(9, userObj.getType());

			if (isUpdate) {
				preparedStmt.setInt(9, userObj.getUser_id());
			}

			int affectedRows = preparedStmt.executeUpdate();
			if (affectedRows == 0) {
				throw new SQLException("Creating/Updating user failed, no rows affected.");
			}

			logger.debug("Insert/Update successful.");

			if (!isUpdate) {
				// Now get the userId which is automatically generated (auto
				// increment)
				try (ResultSet generatedKeys = preparedStmt.getGeneratedKeys()) {
					if (generatedKeys.next()) {
						user_id = generatedKeys.getInt(1);
					} else {
						throw new SQLException("Creating user failed, no ID obtained.");
					}
				}
			} else {
				user_id = userObj.getUser_id();
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("user_id : " + user_id);

		// returns the newly generated user_id
		return user_id;
	}
}
