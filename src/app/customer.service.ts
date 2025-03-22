import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'Customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer=[];
  constructor(private http: HttpClient) { }
  apiUrl:string='http://localhost:8088/customer'
  httpOptions={
    headers:new Headers({
      'Content-Type':'application/json',
    }),
  };
  getAllCustomer(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/readcustomer');
  }
  createCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl+'/createcustomer',customer);
  }
  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(`${this.apiUrl}/deletecustomer/${id}`);
  }
  updateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.apiUrl+'/updatecustomer',customer);
  }
  getCustomerById(id:number):Observable<Customer>{
    return this.http.get<any>(`${this.apiUrl}/getcustomerBYID/${id}`);
  }
}

