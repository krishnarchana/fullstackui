package org.policymanager.rest.user;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;
import org.policymanager.rest.service.user.User;
import org.policymanager.rest.service.user.UserService;

public class UserServiceTest extends JerseyTest {

	static final Logger logger = Logger.getLogger(UserServiceTest.class);

	@Override
	protected Application configure() {
		return new ResourceConfig(UserService.class);
	}

	@Test
	public void getUserTest() {
		Response response = target("user/get?user_id=1").request().get();
		logger.debug("response from getUserTest : " + response);
		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		// Assert.assertTrue("orderId: 453".equals(response));

	}

	@Test
	public void adduserTest() {

		// Map<String, String> data = new HashMap<String, String>();
		// data.put("name_1", "test_name_1");
		// data.put("name_2", "test_name_2");
		// data.put("address", "test-address");
		// data.put("phone", "+9100012322");
		// data.put("email", "test@test.com");
		// data.put("password", "testpassword");
		// data.put("dob", "2017-12-12");
		// data.put("type", "1");

		User userObj = new User();
		userObj.setName_1("test_name_1");
		userObj.setName_2("test_name_2");
		userObj.setAddress("test_address");
		userObj.setPhone("+9102202020");
		userObj.setEmail("test@test.com");
		userObj.setPassword("testpassword");
		long time = System.currentTimeMillis();
		java.sql.Date date = new java.sql.Date(time);
		userObj.setDob(date);
		userObj.setType(0);

		@SuppressWarnings("deprecation")
		// Generate login based on name_1 + DDMM
		String login = userObj.getName_1().substring(0, 4) + String.format("%02d", userObj.getDob().getDay())
				+ String.format("%02d", userObj.getDob().getMonth());

		Entity<User> userEntity = Entity.entity(userObj, MediaType.APPLICATION_JSON_TYPE);
		// target("users/add").request().post(userEntity);
		// Here we send GET request for retrieving results
		// Response response = target("user/add").queryParam("login",
		// login).request().post(userEntity);
		Response response = target("user/add").request().post(userEntity);

		Assert.assertEquals(Response.Status.OK.getStatusCode(), response.getStatus());
		// Assert.assertEquals(login,
		// response.readEntity(User.class).getLogin());

		// final String hello =
		// target("hello").request().post(Entity.json(data), String.class);

		// String response = target("/user/add/").request().get(String.class);
		// Assert.assertTrue("orders summary".equals(response));
	}
	
	@Test
	public void checkLogoutTest() {
		
	}
}