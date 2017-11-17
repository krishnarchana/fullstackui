package org.policymanager.provider;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.security.DenyAll;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import org.apache.log4j.Logger;
import org.policymanager.rest.service.auth.AuthManager;
import org.policymanager.rest.service.user.User;
import org.policymanager.rest.service.user.UserManager;

/**
 * This filter verify the access permissions for a user based on username and
 * password provided in request
 * 
 * @author gopikrishna
 */
@Provider
public class AuthenticationFilter implements javax.ws.rs.container.ContainerRequestFilter {

	@Context
	private ResourceInfo resourceInfo;

	static final Logger logger = Logger.getLogger(AuthenticationFilter.class);

	AuthManager authManager = new AuthManager();
	UserManager userManager = new UserManager();

	private static final String AUTHORIZATION_PROPERTY = "Authorization";
	private static final String AUTHENTICATION_SCHEME = "Basic";
	private static final Response ACCESS_DENIED = Response.status(Response.Status.UNAUTHORIZED)
			.entity("You cannot access this resource").build();
	private static final Response ACCESS_FORBIDDEN = Response.status(Response.Status.FORBIDDEN)
			.entity("Access blocked for all users !!").build();

	@Override
	public void filter(ContainerRequestContext requestContext) {
		Method method = resourceInfo.getResourceMethod();

		// Access allowed for all
		if (!method.isAnnotationPresent(PermitAll.class)) {
			// Access denied for all
			if (method.isAnnotationPresent(DenyAll.class)) {
				requestContext.abortWith(ACCESS_FORBIDDEN);
				return;
			}

			// Get request headers
			final MultivaluedMap<String, String> headers = requestContext.getHeaders();

			// Fetch authorization header
			final List<String> authorization = headers.get(AUTHORIZATION_PROPERTY);

			// If no authorization information present; block access
			if (authorization == null || authorization.isEmpty()) {
				requestContext.abortWith(ACCESS_DENIED);
				return;
			}

			// Get encoded username and password
			final String encodedUserPassword = authorization.get(0).replaceFirst(AUTHENTICATION_SCHEME + " ", "");

			// Decode username and password
			// String usernameAndPassword = new
			// String(Base64.decode(encodedUserPassword.getBytes()));

			// Split username and password tokens
			// final StringTokenizer tokenizer = new
			// StringTokenizer(usernameAndPassword, ":");
			// final String username = tokenizer.nextToken();
			// final String password = tokenizer.nextToken();

			// String userToken = new
			// String(Base64.decode(encodedUserPassword.getBytes()));
			String userToken = new String(encodedUserPassword.getBytes());

			// Verify user access
			if (method.isAnnotationPresent(RolesAllowed.class)) {
				RolesAllowed rolesAnnotation = method.getAnnotation(RolesAllowed.class);
				Set<String> rolesSet = new HashSet<String>(Arrays.asList(rolesAnnotation.value()));

				// Is user valid?
				if (!isUserAllowed(userToken, rolesSet)) {
					requestContext.abortWith(ACCESS_DENIED);
					return;
				}
			}
		}
	}


//	private boolean isUserAllowed(final String username, final String password, final Set<String> rolesSet) {
//		boolean isAllowed = false;
//
//		logger.debug("u : " + username + ", pass : " + password + ", role : " + rolesSet);
//
//		// Step 1. Fetch password from database and match with password in
//		// argument
//		// If both match then get the defined role for user from database and
//		// continue; else return isAllowed [false]
//		// Access the database and do this part yourself
//		// String userRole = userMgr.getUserRole(username);
//
//		if (username.equals("Admin") && password.equals("Admin")) {
//			String userRole = "ADMIN";
//
//			// Step 2. Verify user role
//			if (rolesSet.contains(userRole)) {
//				isAllowed = true;
//			}
//		}
//
//		return isAllowed;
//	}

	private boolean isUserAllowed(final String token, final Set<String> rolesSet) {
		boolean isAllowed = false;

		logger.debug("Token : " + token + ", Roles : " + rolesSet);

		try {
			User user = null;

			int user_id = authManager.getUserIdForToken(token);
			if (user_id > 0) {
				user = userManager.getUser(user_id);
			} else {
				logger.warn("Invalid user");
				return false;
			}

			if (user == null) {
				logger.warn("Failed to get user for user_id :" + user_id);
				return false;
			}

			if (user.getType() == 1) {
				String userRole = "ADMIN";

				// Step 2. Verify user role
				if (rolesSet.contains(userRole)) {
					isAllowed = true;
				} else {
					if (rolesSet.contains("USER")) {
						return true;
						// a admin can access user functions too
					}
				}
				logger.debug("Role : " + userRole + ", Allowed ? " + isAllowed);
			} else {
				String userRole = "USER";

				// Step 2. Verify user role
				if (rolesSet.contains(userRole)) {
					isAllowed = true;
				}
				logger.debug("Role : " + userRole + ", Allowed ? " + isAllowed);
			}
		} catch (Exception e) {
			logger.error("Error : " + e);
		}

		return isAllowed;
	}
}