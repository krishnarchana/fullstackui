package org.policymanager.rest.service.auth;

import java.sql.Connection;
import java.util.ArrayList;

import org.policymanager.db.DbConnection;
import org.policymanager.rest.service.user.User;

public class SecurityManager {

	public ArrayList<User> getAllUsersList() throws Exception {
		ArrayList<User> userList = null;
		try {
			DbConnection database = DbConnection.getInstance();

			Connection connection = database.getConnection();

			LoginHandler loginHandler = new LoginHandler();
			userList = loginHandler.getAllUsers(connection);

		} catch (Exception e) {
			throw e;
		}
		return userList;
	}

}
