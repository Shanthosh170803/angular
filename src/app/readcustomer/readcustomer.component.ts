import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from 'Customer';

@Component({
  selector: 'app-readcustomer',
  templateUrl: './readcustomer.component.html',
  styleUrls: ['./readcustomer.component.css']
})
export class ReadcustomerComponent {
  title='customer';
  submitted=false;
  customer:any=[];
  selectedId:number=0;
  constructor(private customerservice: CustomerService,private router: Router){}

  ngOnInit(){
    this.customer=this.customerservice.getAllCustomer().subscribe((cust)=>(this.customer=cust));
    console.log(this.customer);
  }
  onDelete(cust:Customer){
    this.selectedId=cust.id;
    console.log(cust);
    this.customerservice.deleteCustomer(this.selectedId).subscribe((data:{})=>this.router.navigate(['/readcustomer']));
  }
  updateCustomer(){
    console.log(this.customer);
    this.customerservice.updateCustomer(this.customer).subscribe((data:{})=>this.router.navigate(['/updatecustomer']));
  }
  onSubmit(){
    this.submitted=true;
    alert('Customer data validated...........');
  }
}
