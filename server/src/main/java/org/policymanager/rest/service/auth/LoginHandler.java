
package org.policymanager.rest.service.auth;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.apache.log4j.Logger;
import org.policymanager.rest.service.user.User;

/**
 * LoginHandler
 * 
 * @author gopikrishna
 * @date 07-Nov-2017
 */
public class LoginHandler {
	static final Logger logger = Logger.getLogger(LoginHandler.class);

	public ArrayList<User> getAllUsers(Connection connection) throws Exception {
		ArrayList<User> userList = new ArrayList<User>();
		try {
			// String uname = request.getParameter("uname");
			PreparedStatement ps = connection.prepareStatement("SELECT * FROM user");
			// ps.setString(1,uname);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				User User = new User();
				User.setLogin(rs.getString("username"));
				User.setPassword(rs.getString("password"));
				userList.add(User);
			}
			return userList;
		} catch (Exception e) {
			throw e;
		}
	}

	private boolean isUserAuthenticated(String authString) {

		String decodedAuth = "";
		// Header is in the format "Basic 5tyc0uiDat4"
		// We need to extract data before decoding it back to original string
		String[] authParts = authString.split("\\s+");
		String authInfo = authParts[1];
		// Decode the data back to original string
		byte[] bytes = null;
		/*try {
			// bytes = new BASE64Decoder().decodeBuffer(authInfo);
		} catch (IOException e) {
			logger.error("Error decoding : " + e);
		}*/
		
		decodedAuth = new String(bytes);
		System.out.println(decodedAuth);

		/**
		 * here you include your logic to validate user authentication. it can
		 * be using ldap, or token exchange mechanism or your custom
		 * authentication mechanism.
		 */
		// your validation code goes here....

		return true;
	}

}