package com.gopikrishna.rest.service.user;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

import com.gopikrishna.db.DbConnection;

@Path("/user")
public class UserService {

	static final Logger logger = Logger.getLogger(DbConnection.class);

	@POST
	@Path("/login")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response userLogin(UserLogin userLogin) {
		// String output = "Jersey say : " + msg;
		// return Response.status(200).entity(output).build();

		if (userLogin != null) {
			if (logger.isDebugEnabled()) {
				logger.debug("username : " + userLogin.getUsername());
				logger.debug("password : " + userLogin.getPassword());
			}
		} else {
			//ErrorCode errorCode = new ErrorCode(-1,"Please provide login data.");
			logger.warn(">> No login data found");
			return Response.noContent().build();
		}

		UserToken userToken = new UserToken();
		userToken.setUsername("venkat");
		userToken.setToken("HF*&DDDDD");
		return Response.ok().entity(userToken).build();
	}

}