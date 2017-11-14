/**
 * 
 */
package com.gopikrishna.rest.service.policy;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author venkat
 *
 */
public class Policy {

	@JsonProperty
	private int policyNo = 0;

	@JsonProperty("name")
	private String policyName;

	@JsonProperty("amount")
	private float amountPaid;

	@JsonProperty("maturityDate")
	private Date maturityDate;

	@JsonProperty("valid")
	private boolean policyValid;
	
	private int userId = 0;

	/**
	 * 
	 */
	public Policy() {
		// TODO Auto-generated constructor stub
	}

	public float getAmountPaid() {
		return amountPaid;
	}

	public Date getMaturityDate() {
		return maturityDate;
	}

	public String getPolicyName() {
		return policyName;
	}

	public int getPolicyNo() {
		return policyNo;
	}

	public int getUserId() {
		return userId;
	}

	public boolean isPolicyValid() {
		return policyValid;
	}

	public void setAmountPaid(float amountPaid) {
		this.amountPaid = amountPaid;
	}

	public void setMaturityDate(Date maturityDate) {
		this.maturityDate = maturityDate;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public void setPolicyNo(int policyNo) {
		this.policyNo = policyNo;
	}

	public void setPolicyValid(boolean policyValid) {
		this.policyValid = policyValid;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "No : " + policyNo + ", Name : " + policyName + ", Amount : " + amountPaid + ", Maturity : "
				+ maturityDate + ", Valid " + policyValid;
	}

}
