package org.policymanager.rest.service.user;

import java.sql.Date;
import java.util.Calendar;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.policymanager.exception.InvalidRequestException;
import org.policymanager.rest.ErrorCode;

@Path("/user")
public class UserService {

	static final Logger logger = Logger.getLogger(UserService.class);

	UserManager userManager = new UserManager();

	@RolesAllowed("ADMIN")
	@GET
	@Path("/get")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getUser(@QueryParam("user_id") int userId) throws Exception {

		ErrorCode errorCode = null;
		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			errorCode = new ErrorCode(ErrorCode.ERROR_CODE_INVALID_USER_ID, "Invalid user");
			return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(errorCode).build();
		} else {

			try {
				logger.debug("Getting data for userId :" + userId);
				User userObj = userManager.getUser(userId);
				if (userObj != null) {
					return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(userObj).build();
				}

				errorCode = new ErrorCode(ErrorCode.ERROR_CODE_USER_DOESNT_EXISTS, "User doesn't exists.");
				return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(errorCode).build();

			} catch (Exception e) {
				errorCode = new ErrorCode(ErrorCode.ERROR_CODE_EXCEPTION, "error occurred.");
				return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(errorCode).build();
			}
		}
	}

	@PermitAll
	@POST
	@Path("/add")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addUser(User userObj) throws InvalidRequestException {

		logger.debug("Add User : " + userObj);

		try {
			// Generate login based on name_1 + DDMM
			String login = constructLoginName(userObj.getName_1(), userObj.getDob());
			logger.debug("New login name : " + login);
			
			userObj.setLogin(login);

			if (userManager.loginExists(login)) {
				logger.debug("Login already exists : " + login);
				ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_LOGIN_ALREADY_EXISTS,
						"Login name already exists.");
				return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();
			}

			userObj.setType(0); // non-admin

			int userId = userManager.addUser(userObj, false);
			logger.debug("Reponse userId : " + userId);

			if (userId > 0) {
				// String responsed = "{\"userId\":" + userId + ",\"login\":\""
				// + login + "\",\"password\":\""
				// + userObj.getPassword() + "\"}";
				String responsed = "{\"userId\":" + userId + ",\"login\":\"" + login + "\"}";
				return Response.ok().entity(responsed).build();
			} else {
				logger.warn("Failed to add user record");
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_ADD_FAILED, "Adding failed.");
		return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();

	}

	/**
	 * Constructs login name based on predefined name and date format
	 * 
	 * @param name
	 * @param date
	 * @return
	 */
	private String constructLoginName(String name, Date date) {

		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int month = cal.get(Calendar.MONTH) + 1; // add plus +1
		int day = cal.get(Calendar.DAY_OF_MONTH);

		// Generate login based on name_1 + DDMM
		return  name.substring(0, 4) + String.format("%02d", day) + String.format("%02d", month);
	}
}