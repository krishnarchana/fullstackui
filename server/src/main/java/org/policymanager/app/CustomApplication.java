package org.policymanager.app;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.policymanager.exception.InvalidRequestExceptionMapper;
import org.policymanager.provider.AuthenticationFilter;
import org.policymanager.provider.GsonMessageBodyHandler;

public class CustomApplication extends ResourceConfig {
	public CustomApplication() {
		register(InvalidRequestExceptionMapper.class);
		packages("com.jersey.jaxb");
		packages("com.fasterxml.jackson.jaxrs.json");
		packages("org.policymanager");
		register(LoggingFilter.class);
		register(GsonMessageBodyHandler.class);
		register(AuthenticationFilter.class);
	}
}
