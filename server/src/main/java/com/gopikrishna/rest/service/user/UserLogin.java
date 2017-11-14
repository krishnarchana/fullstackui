package com.gopikrishna.rest.service.user;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserLogin {
	@JsonProperty
	String username;
	@JsonProperty
	String password;

	public UserLogin() {

	}

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
