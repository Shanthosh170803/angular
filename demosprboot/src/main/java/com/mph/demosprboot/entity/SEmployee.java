package com.mph.demosprboot.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.*;
import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class SEmployee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long eid;
	private String ename;
	private String email;
	private String password;
	private String gender;
	private boolean ismarried;

//	@JsonFormat(pattern = "yyyy-mm-dd")
//	private Date dob;
//
//	@ElementCollection
//	private List<Long> phno;

	public Long getEid() {
		return eid;
	}

	public void setEid(Long eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public boolean getIsMarried() {
		return ismarried;
	}

	public void setIsMarried(boolean married) {
		this.ismarried = married;
	}

	@Override
	public String toString() {
		return "SEmployee [eid=" + eid + ", ename=" + ename + ", email=" + email + ", password=" + password
				+ ", gender=" + gender + ", married=" + ismarried + "]";
	}

//	public List<Long> getPhno() {
//		return phno;
//	}
//
//	public void setPhno(List<Long> phno) {
//		this.phno = phno;
//	}
//
//	public Date getDob() {
//		return dob;
//	}
//
//	public void setDob(Date dob) {
//		this.dob = dob;
//	}

//	@Override
//	public String toString() {
//		return "SEmployee [eid=" + eid + ", ename=" + ename + ", email=" + email + ", password=" + password
//				+ ", gender=" + gender + ", married=" + married + ", phno=" + phno + ", dob=" + dob + "]";
//	}

}
