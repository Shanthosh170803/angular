package com.mph.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mph.customer.entity.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer>{

}
