package org.policymanager.rest.auth;

import static org.junit.Assert.assertEquals;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;
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

	@Override
	protected Application configure() {
		return new ResourceConfig(AuthServiceTest.class);
	}

	@Test
	public void userLoginTest() {

		UserLogin userLogin = new UserLogin();
		userLogin.setUsername("Admin");
		userLogin.setPassword("Admin");

		Entity<UserLogin> userEntity = Entity.entity(userLogin, MediaType.APPLICATION_JSON_TYPE);
		Response response = target("user/login").request().post(userEntity);

		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());

		UserToken userToken = response.readEntity(UserToken.class);
		assertEquals(1, userToken.getUserId()); // Admin user_id = 1
		assertEquals(1, userToken.getType()); // Admin user_type = 1, users = 0
	}

	@Test
	public void userLogoutTest() {
		try {
			// Given
			String jsonMimeType = "application/json";
			HttpUriRequest request = new HttpGet("https://api.github.com/users/eugenp");

			// When
			HttpResponse response = HttpClientBuilder.create().build().execute(request);

			// Then
			String mimeType = ContentType.getOrDefault(response.getEntity()).getMimeType();
			assertEquals(jsonMimeType, mimeType);
		} catch (Exception e) {

		}
	}
}
