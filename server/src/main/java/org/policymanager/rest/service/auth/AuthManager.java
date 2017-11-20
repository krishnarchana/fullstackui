/**
 * 
 */
package org.policymanager.rest.service.auth;

import java.security.SecureRandom;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;

import org.apache.log4j.Logger;
import org.policymanager.db.DbConnection;
import org.policymanager.rest.service.user.User;
import org.policymanager.rest.service.user.UserLogin;
import org.policymanager.rest.service.user.UserManager;
import org.policymanager.rest.service.user.UserToken;

/**
 * @author gopikrishna
 *
 */
public class AuthManager {

	private final Logger logger = Logger.getLogger(AuthManager.class);

	private Connection dbConnection = null;

	private boolean isValid = true;

	UserManager userManager = new UserManager();
	
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
	
	/**
	 * Authenticate user, returns token
	 * 
	 * @param username
	 * @param password
	 * @return
	 * @throws Exception
	 */
	public UserToken authenticate(UserLogin userLogin) throws Exception {
		// logger.debug("Login : " + userLogin.getUsername() + ", password : " +
		// userLogin.getPassword());

		if ((userLogin.getUsername() == null || userLogin.getUsername().length() < 1)
				|| (userLogin.getPassword() == null || userLogin.getPassword().length() < 4)) {
			logger.warn("Invalid username/password");
			return null;
		}

		try {

			User user = userManager.getUserForLogin(userLogin.getUsername());
			if (user != null) {

				// Validate username and password
				if (userLogin.getUsername().equals(user.getLogin())
						&& user.getPassword().equals(userLogin.getPassword())) {

					logger.debug("login : " + userLogin.getUsername() + ", validated");

					// Check whether the user already authenticated
					if (isUserAlreadyLoggedIn(user.getUser_id())) {

						logger.debug("User : " + user.getLogin() + " already logged-in.");

						UserToken userToken = getToken(user.getUser_id());
						if (userToken != null) {
							userToken.setName(user.getName_1());
							userToken.setType(user.getType());
						}

						return userToken;
					} else {
						// Issue a token for the user
						String token = issueToken();
						logger.debug("Token generated for login :" + user.getLogin() + ", token : " + token);

						UserToken userToken = new UserToken(user.getUser_id(), user.getName_1(), token);
						if (!addLogin(userToken)) {
							logger.error("Failed to add token to db");
							return null;
						}

						userToken.setType(user.getType());
						return userToken;
					}
				}
			}

		} catch (Exception e) {
			logger.error("Error login : " + e);
		}

		return null;
	}

	private String issueToken() {
		SecureRandom random = new SecureRandom();
		byte bytes[] = new byte[20];
		random.nextBytes(bytes);
		String token = Base64.getEncoder().encodeToString(bytes);
		return token;
	}

	public boolean isUserAuthenticated(String token) {
		if (token == null)
			return false;

		try {

			logger.debug("Token : " + token);
			int user_id = getUserIdForToken(token);
			if (user_id != -1) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			logger.error("Error decoding : " + e);
			return false;
		}

		// final StringTokenizer tokenizer = new
		// StringTokenizer(usernameAndPassword, ":");
		// final String username = tokenizer.nextToken();
		// final String password = tokenizer.nextToken();
		//
		// // we have fixed the userid and password as admin
		// // call some UserService/LDAP here
		// boolean authenticationStatus = "admin".equals(username) &&
		// "admin".equals(password);
		// return authenticationStatus;
	}

}
