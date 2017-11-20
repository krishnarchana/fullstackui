package org.policymanager.rest.auth;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;
import org.policymanager.rest.service.auth.AuthManager;
import org.policymanager.rest.service.auth.AuthService;
import org.policymanager.rest.service.user.UserLogin;
import org.policymanager.rest.service.user.UserToken;

/**
 * Authorization Service Test
 * 
 * @author gopikrishna
 *
 */
public class AuthServiceTest extends JerseyTest {

	static final Logger logger = Logger.getLogger(AuthServiceTest.class);

	AuthManager authManager = new AuthManager();

	@Override
	protected Application configure() {
		return new ResourceConfig(AuthService.class);
	}

	@Test
	public void userLoginTest() {

		logger.debug("--> User login test begin");
		UserLogin userLogin = new UserLogin();
		userLogin.setUsername("Admin");
		userLogin.setPassword("Admin");

		Entity<UserLogin> userEntity = Entity.entity(userLogin, MediaType.APPLICATION_JSON_TYPE);
		Response response = target("auth/login").request().post(userEntity);

		logger.debug("userLoginTest Response code : " + response.getStatusInfo().getStatusCode());

		// UserToken userToken = response.readEntity(UserToken.class);
		//System.out.println("User token : " + userToken);

		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		// assertEquals(1, userToken.getUserId()); // Admin user_id = 1
		// assertEquals(1, userToken.getType()); // Admin user_type = 1, users =
		// 0
	}

	@Test
	public void userLogoutTest() {
		logger.debug("--> User logout test begin");
		
		try {
			UserToken token = authManager.getToken(1);
			System.out.println("Token : " + token);
			if (token == null) {
				return;
			}

			Response response = target("auth/logout").request().header("Authorization", token.getToken()).get();
			logger.debug("userLogoutTest Response code : "  + response.getStatusInfo().getStatusCode());
			Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
