package com.mph.customer.service;

import java.util.List;
import java.util.Optional;

import com.mph.customer.entity.Customer;

public interface CustomerService {
	
	public void createCustomer(Customer customer);

	public List<Customer> getAllCustomer();

	public List<Customer> updateCustomer(Customer customer);

	public List<Customer> deleteCustomer(int id);
	
	public Optional<Customer> getCustomerById(int id);
} 
