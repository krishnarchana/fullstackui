package org.policymanager.app;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.policymanager.provider.GsonMessageBodyHandler;
import org.policymanager.rest.service.auth.AuthenticationFilter;

public class CustomApplication extends ResourceConfig {
	public CustomApplication() {
		packages("com.jersey.jaxb");
		packages("com.fasterxml.jackson.jaxrs.json");
		packages("org.policymanager");
		register(LoggingFilter.class);
		register(GsonMessageBodyHandler.class);
		register(AuthenticationFilter.class);
	}
}
