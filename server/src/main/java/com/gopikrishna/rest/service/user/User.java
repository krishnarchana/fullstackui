package com.gopikrishna.rest.service.user;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

/*
 * (user_id INT AUTO_INCREMENT, 
					login VARCHAR(100), 
					name_1 VARCHAR(255), 
					name_2 VARCHAR(255), 
					address VARCHAR(255), 
					phone_1 VARCHAR(255), 
					email VARCHAR(255), 
					password VARCHAR(255),
					dob DATE, 
					type INT(2), 
					UNIQUE(login), 
					PRIMARY KEY (user_id)
 */
public class User {

	@JsonProperty
	private int user_id;

	@JsonProperty
	private String login;

	@JsonProperty
	private String name_1;

	@JsonProperty
	private String name_2;

	@JsonProperty
	private String address;

	@JsonProperty
	private String phone;

	@JsonProperty
	private String email;

	@JsonProperty
	private String password;

	@JsonProperty
	private Date dob;

	@JsonProperty
	private int type;

	public String getAddress() {
		return address;
	}

	public Date getDob() {
		return dob;
	}

	public String getEmail() {
		return email;
	}

	public String getLogin() {
		return login;
	}

	public String getName_1() {
		return name_1;
	}

	public String getName_2() {
		return name_2;
	}

	public String getPassword() {
		return password;
	}

	public String getPhone() {
		return phone;
	}

	public int getType() {
		return type;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public void setName_1(String name_1) {
		this.name_1 = name_1;
	}

	public void setName_2(String name_2) {
		this.name_2 = name_2;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setType(int type) {
		this.type = type;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "UserId : " + user_id + ", login : " + login + "name_1 : " + name_1 + ", name_2 : " + name_2
				+ ", address : " + address + ", phone : " + phone + ", email : " + email + ", dob : " + dob
				+ ", type : " + type;
	}
}