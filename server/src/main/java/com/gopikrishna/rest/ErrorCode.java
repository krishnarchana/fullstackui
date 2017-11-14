package com.gopikrishna.rest;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorCode {

	@JsonProperty
	int errorCode;
	@JsonProperty
	String errorStr;

	public static final int ERROR_CODE_ADD_FAILED = -1;
	public static final int ERROR_CODE_READ_FAILED = -2;
	public static final int ERROR_CODE_LOGIN_ALREADY_EXISTS = -3;
	public static final int ERROR_CODE_USER_DOESNT_EXISTS = -4;
	public static final int ERROR_CODE_INVALID_USER_ID = -5;
	public static final int ERROR_CODE_EXCEPTION = -100;
	

	public ErrorCode(int errorCode, String message) {
		this.errorCode = errorCode;
		this.errorStr = message;
	}

	public int getErrorCode() {
		return errorCode;
	}

	public String getErrorStr() {
		return errorStr;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public void setErrorStr(String errorStr) {
		this.errorStr = errorStr;
	}
}
