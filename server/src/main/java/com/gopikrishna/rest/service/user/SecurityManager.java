package com.gopikrishna.rest.service.user;

import java.sql.Connection;
import java.util.ArrayList;

import com.gopikrishna.db.DbConnection;
import com.gopikrishna.rest.service.auth.LoginHandler;

public class SecurityManager {

	public ArrayList<UserVO> getAllUsersList() throws Exception {
		ArrayList<UserVO> userList = null;
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
