/**
 * 
 */
package org.policymanager.rest.service.policy;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import org.apache.log4j.Logger;
import org.policymanager.rest.ErrorCode;

/**
 * @author gopikrishna
 *
 */

@Path("/policy")
public class PolicyService {

	static final Logger logger = Logger.getLogger(PolicyService.class);

	PolicyManager pManager = new PolicyManager();

	public PolicyService() {}

	@PermitAll
	@GET
	@Path("/query")
	@Produces({ MediaType.APPLICATION_JSON })
	public Response getPolicy(@Context UriInfo info) {
		logger.debug("Start");
		try {
			String param = info.getQueryParameters().getFirst("userId");
			logger.debug("Parameter : " + param);

			if (param != null) {
				int userId = Integer.parseInt(param);
				logger.debug("getting policies for user : " + userId);

				List<Policy> policies = pManager.getPolicyForUser(userId);
				if (policies == null || policies.size() < 1) {
					return Response.status(204).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity("{}").build();
				} else {
					return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(policies).build();
				}
			}

			// Check for "policyNo"
			param = info.getQueryParameters().getFirst("policyNo");
			if (param != null) {
				int policyNo = Integer.parseInt(param);
				logger.debug("getting policy for policy no : " + policyNo);

				Policy policy = pManager.getPolicy(policyNo);

				if (policy != null) {
					return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(policy).build();
				} else {
					return Response.status(204).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity("{}").build();
				}
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");
		return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();

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
				return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(policyNo).build();
			} else {
				logger.warn("Failed to add policy record");
			}
		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}
		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_ADD_FAILED, "Adding failed.");
		return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();
	}

	@POST
	@Path("/edit")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Response editPolicy(Policy policy) {
		logger.debug("Edit policy : " + policy);

		if (pManager.isValid()) {
			try {
				int policyNo = pManager.addPolicy(policy, true);
				logger.debug("Reponse policyNo : " + policyNo);

				if (policyNo > 0) {
					return Response.ok().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(policyNo).build();
				} else {
					logger.warn("Failed to add policy record");
				}
			} catch (Exception e) {
				logger.error("Error : " + e.getMessage());
			}
		}
		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_ADD_FAILED, "Update failed.");
		return Response.serverError().header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD").entity(error).build();
	}
}