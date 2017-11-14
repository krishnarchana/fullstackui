package com.gopikrishna.app;

/**
 * Authorization filter service
 * @author gopikrishna
 */
// credits to : http://javapapers.com/web-service/restful-services-http-basic-authentication/
import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gopikrishna.rest.service.auth.AuthenticationService;

public class RestAuthenticationFilter implements javax.servlet.Filter {
	public static final String AUTHENTICATION_HEADER = "Authorization";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter)
			throws IOException, ServletException {
		if (request instanceof HttpServletRequest) {
			HttpServletRequest httpServletRequest = (HttpServletRequest) request;
			String authCredentials = httpServletRequest.getHeader(AUTHENTICATION_HEADER);

			// better injected
			AuthenticationService authenticationService = new AuthenticationService();

			boolean authenticationStatus = authenticationService.authenticate(authCredentials);

			if (authenticationStatus) {
				filter.doFilter(request, response);
			} else {
				if (response instanceof HttpServletResponse) {
					HttpServletResponse httpServletResponse = (HttpServletResponse) response;
					httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					httpServletResponse.getWriter().print("<html><head><title>Service Unauthorized</title></head>");
					httpServletResponse.getWriter().print("<body>Unauthorized request made.</body>");
					httpServletResponse.getWriter().println("</html>");
				}
			}
		}
	}

	@Override
	public void destroy() {
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}
}