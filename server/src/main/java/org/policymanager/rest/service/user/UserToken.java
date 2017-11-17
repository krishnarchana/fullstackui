package org.policymanager.rest.service.user;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserToken {
	@JsonProperty
	int userId;
	@JsonProperty
	String token;
	@JsonProperty
	String name;
	@JsonProperty
	int type = 0;
	
	Timestamp login_time;

	public UserToken(int userId, String name, String token) {
		this.userId = userId;
		this.name = name;
		this.token = token;
		login_time = new Timestamp(System.currentTimeMillis());
	}

	public Timestamp getLogin_time() {
		return login_time;
	}

	public String getName() {
		return name;
	}

	public String getToken() {
		return token;
	}

	public int getType() {
		return type;
	}

	public int getUserId() {
		return userId;
	}

	public void setLogin_time(Timestamp login_time) {
		this.login_time = login_time;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setType(int type) {
		this.type = type;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "userId : " + userId + ", name : " + name + ", Token : " + token;
	}

}
