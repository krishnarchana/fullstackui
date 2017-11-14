/**
 * 
 */
package com.gopikrishna.rest.service.policy;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.gopikrishna.db.DbConnection;

/**
 * Policy manager
 * 
 * @author gopikrishna
 *
 */
public class PolicyManager {

	static final Logger logger = Logger.getLogger(PolicyManager.class);

	Connection dbConnection = null;

	boolean isValid = true;

	public boolean isValid() {
		return isValid;
	}

	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}

	/**
	 * 
	 */
	public PolicyManager() {
		// TODO Auto-generated constructor stub
		DbConnection database = DbConnection.getInstance();
		try {
			dbConnection = database.getConnection();
		} catch (Exception e) {
			logger.error("Failed to get connection.");
			dbConnection = null;
			setValid(false);
		}
	}

	/**
	 * List all policies
	 * 
	 * @return
	 */
	public List<Policy> getAllPolicies() throws Exception {
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return null;
		}

		List<Policy> policies = new ArrayList<>();

		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM policy");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Policy policy = new Policy();
				policy.setPolicyNo(rs.getInt("policy_no"));
				policy.setPolicyNo(rs.getInt("user_id"));
				policy.setPolicyName(rs.getString("name"));
				policy.setAmountPaid(rs.getFloat("amount_paid"));
				// java.util.Date dbSqlDateConverted = new
				// java.util.Date(dbSqlDate.getTime());
				policy.setMaturityDate(rs.getDate("end_date"));
				policy.setPolicyValid(rs.getBoolean("policy_valid"));

				policies.add(policy);
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("Total policies : " + policies.size());
		return policies;
	}

	/**
	 * Get Policy for the policyNo
	 * 
	 * @param policyNo
	 * @return
	 */
	public Policy getPolicy(int policyNo) throws Exception {
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return null;
		}

		if (policyNo < 1) {
			logger.warn("Invalid policyNo : " + policyNo);
			return null;
		}

		Policy policy = null;
		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM policy WHERE policy_no = ?");
			ps.setInt(1, policyNo);

			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				policy = new Policy();
				policy.setPolicyNo(rs.getInt("policy_no"));
				policy.setPolicyNo(rs.getInt("user_id"));
				policy.setPolicyName(rs.getString("name"));
				policy.setAmountPaid(rs.getFloat("amount_paid"));
				policy.setMaturityDate(rs.getDate("end_date"));
				policy.setPolicyValid(rs.getBoolean("policy_valid"));
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("Policy : " + policy);

		return policy;
	}

	/**
	 * Get policy for the user_id
	 * 
	 * @param userId
	 * @return
	 */
	public List<Policy> getPolicyForUser(int userId) throws Exception {
		
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return null;
		}

		if (userId < 1) {
			logger.warn("Invalid userId : " + userId);
			return null;
		}

		List<Policy> policies = new ArrayList<>();

		try {
			PreparedStatement ps = dbConnection.prepareStatement("SELECT * FROM policy WHERE user_id = ?");
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				Policy policy = new Policy();
				policy.setPolicyNo(rs.getInt("policy_no"));
				policy.setPolicyNo(rs.getInt("user_id"));
				policy.setPolicyName(rs.getString("name"));
				policy.setAmountPaid(rs.getFloat("amount_paid"));
				// java.util.Date dbSqlDateConverted = new
				// java.util.Date(dbSqlDate.getTime());
				policy.setMaturityDate(rs.getDate("end_date"));
				policy.setPolicyValid(rs.getBoolean("policy_valid"));

				policies.add(policy);
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("Total policies : " + policies.size() + ", UserId : " + userId);
		return policies;
	}

	/**
	 * Remove policy
	 * 
	 * @param policyNo
	 */
	public void removePolicy(int policyNo) {
		// TODO
	}

	/**
	 * Add policy
	 * 
	 * @param policy
	 * @return policy_no
	 */
	public int addPolicy(Policy policy, boolean isUpdate) throws SQLException, Exception {
		
		if (!isValid()) {
			logger.warn("DB connection is not available");
			return -1;
		}
		
		int policyNo = -1;

		if (policy == null) {
			logger.warn("Invalid policy object");
			return policyNo;
		}

		try {

			String query = null;
			if (isUpdate) {
				query = " UPDATE policy SET user_id = ?, name = ?, amount_paid = ?, end_date = ?, policy_valid = ? WHERE policy_no = ?";
				logger.debug("Updating record");
			} else {
				// Insert record
				query = " INSERT INTO policy(user_id, name, amount_paid, end_date, policy_valid)"
						+ " values (?, ?, ?, ?, ?)";
				logger.debug("Inserting record");
			}

			// create the mysql insert preparedstatement
			PreparedStatement preparedStmt = dbConnection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

			preparedStmt.setInt(1, policy.getUserId());
			preparedStmt.setString(2, policy.getPolicyName());
			preparedStmt.setFloat(3, policy.getAmountPaid());
			preparedStmt.setDate(4, policy.getMaturityDate());
			preparedStmt.setBoolean(5, policy.isPolicyValid());

			if (isUpdate) {
				preparedStmt.setInt(6, policy.getPolicyNo());
			}

			int affectedRows = preparedStmt.executeUpdate();
			if (affectedRows == 0) {
				throw new SQLException("Creating/Updating policy failed, no rows affected.");
			}

			logger.debug("Insert/Update successful.");

			if (!isUpdate) {
				// Now get the policyNo which is automatically generated (auto
				// increment)
				try (ResultSet generatedKeys = preparedStmt.getGeneratedKeys()) {
					if (generatedKeys.next()) {
						policyNo = generatedKeys.getInt(1);
					} else {
						throw new SQLException("Creating policy failed, no ID obtained.");
					}
				}
			} else {
				policyNo = policy.getPolicyNo();
			}
		} catch (Exception e) {
			throw e;
		}

		logger.debug("Policy No : " + policyNo);

		// returns the newly generated policyNo
		return policyNo;
	}

}
