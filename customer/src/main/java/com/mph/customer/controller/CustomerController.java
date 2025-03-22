package com.mph.customer.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mph.customer.entity.Customer;
import com.mph.customer.service.CustomerService;


@RestController
@RequestMapping("/customer")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders = "*")
public class CustomerController {

	@Autowired
	CustomerService customerservice;
	
	@PostMapping("/createcustomer")
	public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
		customerservice.createCustomer(customer);
		return new ResponseEntity<>(customer,HttpStatus.CREATED);
	}

	@GetMapping("/readcustomer")
	public ResponseEntity<List<Customer>> getAllCustomer() {

//		System.out.println("Devtools dependencies is added");
		List<Customer> customerlist = customerservice.getAllCustomer();
		return ResponseEntity.ok(customerlist);
	}

	@PutMapping("/updatecustomer")
	public ResponseEntity<List<Customer>> updateCustomer(@RequestBody Customer customer) {

		List<Customer> updatecustomer = customerservice.updateCustomer(customer);
		return ResponseEntity.ok(updatecustomer);
	}

	@DeleteMapping("/deletecustomer/{id}")
	public ResponseEntity<List<Customer>> deleteEmployee(@PathVariable int id) {

		List<Customer> existingcustomer = customerservice.deleteCustomer(id);
		return ResponseEntity.ok(existingcustomer);
	}
	
	@GetMapping("/getcustomerBYID/{id}")
	public ResponseEntity<Optional<Customer>> getEmployeeById(@PathVariable int id) {

		Optional<Customer> cust = customerservice.getCustomerById(id);
		return ResponseEntity.ok(cust);
	}
}
