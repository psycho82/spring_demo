package com.itatservice.demo;

public class UserDetails {
	private String userName;
	private String emailId;
	private final long position;

	public UserDetails(long position){
		this.position = position;
	}
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public long getPosition() {
		return position;
	}
	@Override
	public String toString() {
		return "userName: " + this.userName + "\nemailId: "+emailId + "\nposition: "+position;
	}
	
}