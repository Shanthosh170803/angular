package com.mph.customer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mph.customer.entity.Customer;
import com.mph.customer.repository.CustomerRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	@Override
	public void createCustomer(Customer customer) {
		customerRepository.save(customer);
	}

	@Override
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

	@Override
	public List<Customer> updateCustomer(Customer customer) {
		customerRepository.save(customer);
		return getAllCustomer();
	}

	@Override
	public List<Customer> deleteCustomer(int id) {
		customerRepository.deleteById(id);
		return getAllCustomer();
	}

	@Override
	public Optional<Customer> getCustomerById(int id) {
		Optional<Customer> cust=customerRepository.findById(id);
		return cust;
	}

}
