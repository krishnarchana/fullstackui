package org.policymanager.rest.service.auth;

import java.security.SecureRandom;
import java.util.Base64;

import javax.annotation.security.PermitAll;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.policymanager.rest.ErrorCode;
import org.policymanager.rest.service.user.User;
import org.policymanager.rest.service.user.UserLogin;
import org.policymanager.rest.service.user.UserManager;
import org.policymanager.rest.service.user.UserToken;

@Path("/auth")
public class AuthService {

	static final Logger logger = Logger.getLogger(AuthService.class);

	UserManager userManager = new UserManager();
	AuthManager authManager = new AuthManager();

	@PermitAll
	@Path("/login")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response userLogin(UserLogin userLogin) {
		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_USER_ERROR, "You are a not registered User. Register to login");
		try {
			// Authenticate the user using the credentials provided
			UserToken userToken = authManager.authenticate(userLogin);
			if (userToken != null) {
				logger.info("Sending user token : " + userToken);
				// Return the token on the response
				return Response.status(Response.Status.OK).header("Access-Control-Allow-Origin", "*")
						.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(userToken).build();
			}

		} catch (Exception e) {
			return Response.status(Response.Status.FORBIDDEN).header("Access-Control-Allow-Origin", "*")
					.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").build();
		}

		return Response.status(Response.Status.UNAUTHORIZED).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();
	}

	@PermitAll
	@Path("/logout")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response useLogout(@HeaderParam("authorization") String authString) {
		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_USER_ERROR, "User not found/authenticated.");
		try {
			// header value format will be "Basic encodedstring"
			// for Basic authentication.
			// Example"Basic YWRtaW46YWRtaW4="
			final String encodedUserPassword = authString.replaceFirst("Basic" + " ", "");
			String token = null;
			// byte[] decodedBytes =
			// Base64.getDecoder().decode(encodedUserPassword);
			byte[] decodedBytes = encodedUserPassword.getBytes();
			token = new String(decodedBytes, "UTF-8");

			if (!authManager.isUserAuthenticated(token)) {
				error.setErrorStr("User is not authenticaed");
				return Response.status(Response.Status.FORBIDDEN).header("Access-Control-Allow-Origin", "*")
						.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error)
						.build();
			}

			logger.debug("Token : " + token);
			int user_id = authManager.getUserIdForToken(token);
			if (user_id != -1) {
				authManager.deleteLogin(user_id);
				logger.info("User logged out");
				return Response.ok().entity("{\"success\":\"User logged out\"}")
						.header("Access-Control-Allow-Origin", "*")
						.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").build();
			} else {
				logger.error("Failed to log out");
				error.setErrorStr("Logout failed.");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(error)
						.header("Access-Control-Allow-Origin", "*")
						.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").build();
			}
		} catch (Exception e) {
			logger.error("Failed to logout : " + e);
		}

		return Response.status(Response.Status.UNAUTHORIZED).entity(error).build();
	}

	
}