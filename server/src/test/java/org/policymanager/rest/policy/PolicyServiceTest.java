package org.policymanager.rest.policy;

import javax.ws.rs.core.Application;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;

/**
 * Policies Services Test
 * 
 * @author gopkrishna
 *
 */
public class PolicyServiceTest extends JerseyTest {

	static final Logger logger = Logger.getLogger(PolicyServiceTest.class);

	@Override
	protected Application configure() {
		return new ResourceConfig(PolicyServiceTest.class);
	}

	@Test
	public void getPolicyForUserId() {
	}

	@Test
	public void getAllPolicies() {
	}

	@Test
	public void getPolicyForUser() {
	}

	@Test
	public void getPolicy() {

	}
}
