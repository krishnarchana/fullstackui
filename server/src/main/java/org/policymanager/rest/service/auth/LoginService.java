package org.policymanager.rest.service.auth;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.policymanager.rest.service.user.User;

@Path("/auth")
public class LoginService {

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String login(@FormParam("username") String username, @FormParam("password") String password) {
		return getAllUsersList(username, password);
	}

	public String getAllUsersList(String username, String password) {
		try {
			ArrayList<User> userList = null;
			SecurityManager securityManager = new SecurityManager();
			userList = securityManager.getAllUsersList();
			for (User userVO : userList) {
				if (userVO.getLogin().equals(username)) {
					if (userVO.getPassword().equals(password)) {
						return "Logged in User:" + username;
					}
				}
			}

		} catch (Exception e) {
			System.out.println("error");
		}
		return "You are not a Valid User";
	}
}
