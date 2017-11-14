package com.gopikrishna.rest.service.auth;

import java.sql.Connection;
import java.util.ArrayList;

import com.gopikrishna.db.DbConnection;
import com.gopikrishna.rest.service.user.User;

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
