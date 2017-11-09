package com.gopikrishna.rest;

public class ErrorCode {

	int errorCode;

	String errorStr;

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
