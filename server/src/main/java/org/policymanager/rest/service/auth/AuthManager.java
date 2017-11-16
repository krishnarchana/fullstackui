/**
 * 
 */
package org.policymanager.rest.service.auth;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;
import java.util.StringTokenizer;

import org.apache.log4j.Logger;
import org.policymanager.db.DbConnection;
import org.policymanager.rest.service.user.UserToken;

/**
 * @author gopikrishna
 *
 */
public class AuthManager {

	private final Logger logger = Logger.getLogger(AuthManager.class);

	private Connection dbConnection = null;

	private boolean isValid = true;

	public AuthManager() {
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
	 * Add the login data to database
	 * 
	 * @param userToken
	 * @return
	 * @throws Exception
	 */
	public boolean addLogin(UserToken userToken) throws Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			return false;
		}

		if (userToken == null) {
			logger.warn("Invalid token object");
			return false;
		}

		try {
			String query = null;
			query = " INSERT INTO login(user_id, token, login_time, valid)" + " values (?, ?, ?, ?)";
			logger.debug("Inserting token record");

			PreparedStatement preparedStmt = dbConnection.prepareStatement(query);

			preparedStmt.setInt(1, userToken.getUserId());
			preparedStmt.setString(2, userToken.getToken());
			// preparedStmt.setTimestamp(3, new
			// Timestamp(System.currentTimeMillis()));
			preparedStmt.setTimestamp(3, userToken.getLogin_time());
			preparedStmt.setBoolean(4, true);

			int affectedRows = preparedStmt.executeUpdate();
			if (affectedRows == 0) {
				throw new SQLException("Creating/Updating user failed, no rows affected.");
			}

			logger.debug("Insert/Update successful.");

			return true;
		} catch (Exception e) {
			throw e;
		}
	}

	public boolean isUserAlreadyLoggedIn(int userId) throws Exception {
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return false;
		}

		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			return false;
		}

		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM login WHERE user_id = ?");
			ps.setInt(1, userId);

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				// int user_id = rs.getInt("user_id");
				boolean valid_login = rs.getBoolean("valid");
				if (valid_login) {
					return true;
				} else {
					// session expired, but the record still exists, delete it
					if (deleteLogin(userId)) {
						logger.debug("delted bogus login");
						return false;
					} else {
						logger.warn("couldn't delete bogus login");
						return true;
					}
				}
			}
		} catch (Exception e) {
			throw e;
		}

		return false;
	}

	public boolean deleteLogin(int userId) throws Exception {
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return false;
		}

		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			return false;
		}

		try {
			PreparedStatement ps = dbConnection.prepareStatement("DELETE FROM login WHERE user_id = ?");
			ps.setInt(1, userId);
			ps.executeUpdate();

			return true;
		} catch (Exception e) {
			throw e;
		}
	}

	public UserToken getToken(int userId) throws Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			return null;
		}

		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			return null;
		}

		UserToken userToken = null;
		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM login WHERE user_id = ?");
			ps.setInt(1, userId);

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				userToken = new UserToken(rs.getInt("user_id"), "", rs.getString("token"));
				userToken.setLogin_time(rs.getTimestamp("login_time"));
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("userToken : " + userToken);
		return userToken;
	}

	public int getUserIdForToken(String token) throws Exception {

		if (!isValid()) {
			logger.warn("DB connection is not available");
			return -1;
		}

		if (token == null || token.length() < 1) {
			logger.warn("Invalid token : " + token);
			return -1;
		}

		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM login WHERE token = ?");
			ps.setString(1, token);

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				int user_id = rs.getInt("user_id");
				return user_id;
			}
			
			logger.warn("No login info. found for token : " + token);
			return -1;
		} catch (Exception e) {
			throw e;
		}
	}

}
