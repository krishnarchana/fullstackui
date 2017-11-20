/**
 * 
 */
package org.policymanager.rest.service.policy;

import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;
import org.policymanager.rest.ErrorCode;
import org.policymanager.rest.service.auth.AuthManager;

/**
 * @author gopikrishna
 *
 */

@Path("/policy")
public class PolicyService {

	static final Logger logger = Logger.getLogger(PolicyService.class);

	PolicyManager pManager = new PolicyManager();
	AuthManager authManager = new AuthManager();

	public PolicyService() {
	}

	@RolesAllowed("ADMIN")
	@GET
	@Path("/query/user/{param}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getPolicyForUserId(@PathParam("param") int userId) {

		logger.debug("Start");

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");

		try {
			logger.debug("getting policies for user : " + userId);
			if (userId < 1) {
				logger.warn("Invalid user_id");
				error.setErrorStr("Invalid user_id");
			} else {
				List<Policy> policies = pManager.getPolicyForUser(userId);
				if (policies == null || policies.size() < 1) {
					error.setErrorStr("No policies found.");
					return Response.status(204).entity(error).build();
				} else {
					return Response.ok().entity(policies).build();
				}
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		return Response.serverError().entity(error).build();

	}

	@RolesAllowed("ADMIN")
	@GET
	@Path("/all")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getAllPolicies() {

		logger.debug("Getting all policies");

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");

		try {
			List<Policy> policies = pManager.getAllPolicies();
			if (policies == null || policies.size() < 1) {
				error.setErrorStr("No policies found.");
				return Response.status(204).entity(error).build();
			} else {
				return Response.ok().entity(policies).build();
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		return Response.serverError().entity(error).build();
	}

	@RolesAllowed("USER")
	@GET
	@Path("/query")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getPolicyForUser(@HeaderParam("authorization") String authString) {

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");

		try {
			// Get encoded username and password
			final String token = authString.replaceFirst("Basic" + " ", "");
			int userId = authManager.getUserIdForToken(token);
			logger.debug("Token : (" + token + "), UserId : (" + userId + ")");

			if (userId < 1) {
				logger.warn("Invalid user_id");
				error.setErrorStr("Invalid user_id");
			} else {
				logger.debug("getting policies for user : " + userId);

				List<Policy> policies = pManager.getPolicyForUser(userId);
				if (policies == null || policies.size() < 1) {
					error.setErrorStr("No policies found.");
					return Response.status(204).entity(error).build();
				} else {
					return Response.ok().entity(policies).build();
				}
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		return Response.serverError().entity(error).build();

	}

	@RolesAllowed("ADMIN")
	@GET
	@Path("/query/{param}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getPolicy(@PathParam("param") int policyNo) {

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");
		try {
			logger.debug("getting policy for policy no : " + policyNo);

			Policy policy = pManager.getPolicy(policyNo);

			if (policy != null) {
				return Response.ok().entity(policy).build();
			} else {
				error.setErrorStr("No policies found.");
				return Response.status(204).entity(error).build();
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		return Response.serverError().entity(error).build();
	}

	@RolesAllowed("ADMIN")
	@POST
	@Path("/add")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response addPolicy(Policy policy) {

		logger.debug("Add policy : " + policy);

		try {
			int policyNo = pManager.addPolicy(policy, false);
			logger.debug("Reponse policyNo : " + policyNo);

			if (policyNo > 0) {
				return Response.ok().entity(policyNo).build();
			} else {
				logger.warn("Failed to add policy record");
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_ADD_FAILED, "Adding failed.");
		return Response.serverError().entity(error).build();
	}

	@RolesAllowed("ADMIN")
	@POST
	@Path("/edit")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response editPolicy(Policy policy) {
		logger.info("Edit policy : " + policy);

		if (pManager.isValid()) {
			try {
				int policyNo = pManager.addPolicy(policy, true);
				logger.debug("Reponse policyNo : " + policyNo);

				if (policyNo > 0) {
					return Response.ok().entity(policyNo).build();
				} else {
					logger.warn("Failed to add policy record");
				}
			} catch (Exception e) {
				logger.error("Error : " + e.getMessage());
			}
		}

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_ADD_FAILED, "Update failed.");
		return Response.serverError().entity(error).build();
	}
}
