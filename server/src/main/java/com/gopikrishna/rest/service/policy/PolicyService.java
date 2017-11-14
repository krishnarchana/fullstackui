/**
 * 
 */
package com.gopikrishna.rest.service.policy;

import java.util.List;

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

import com.gopikrishna.rest.ErrorCode;

/**
 * @author gopikrishna
 *
 */

@Path("/policy")
public class PolicyService {

	static final Logger logger = Logger.getLogger(PolicyService.class);

	PolicyManager pManager = new PolicyManager();

	public PolicyService() {
	}

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
				if (policies == null || policies.size() < 0) {
					return Response.status(204).entity("{}").build();
				} else {
					return Response.ok().entity(policies).build();
				}
			}

			// Check for "policyNo"
			param = info.getQueryParameters().getFirst("policyNo");
			if (param != null) {
				int policyNo = Integer.parseInt(param);

				logger.debug("getting policy for policy no : " + policyNo);

				Policy policy = pManager.getPolicy(policyNo);

				if (policy != null) {
					return Response.ok().entity(policy).build();
				} else {
					return Response.status(204).entity("{}").build();
				}
			}

		} catch (Exception e) {
			logger.error("Error : " + e.getMessage());
		}

		ErrorCode error = new ErrorCode(ErrorCode.ERROR_CODE_READ_FAILED, "No data found/Some error occurred.");
		return Response.serverError().entity(error).build();

	}

	/*
	 * @GET
	 * 
	 * @Path("/query")
	 * 
	 * @Produces({ MediaType.APPLICATION_JSON }) public Response
	 * getPolicy(@QueryParam("policyNo") int policyNo) { if (pManager.isValid())
	 * { try { Policy policy = pManager.getPolicy(policyNo); return
	 * Response.ok().entity(policy).build();
	 * 
	 * // GenericEntity<List<Person>> entity = new //
	 * GenericEntity<List<Person>>(Lists.newArrayList<persons)) {}; // Return
	 * Response.ok(entity).build(); } catch (Exception e) {
	 * logger.error("Error : " + e.getMessage()); } }
	 * 
	 * return Response.serverError().entity("Database failure").build(); }
	 */

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
