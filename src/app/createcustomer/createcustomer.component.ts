import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent {
  customer: any={
    name:'',
  };
  submitted=false;
  constructor(private customerservice:CustomerService,public router:Router){}
  createCustomer(){
    console.log(this.customer);
    this.customerservice.createCustomer(this.customer).subscribe((data:{})=>this.router.navigate(['/readcustomer']));
  }
  onSubmit() {
    this.submitted = true;
    alert('Employee datas are validated successfully!');
  }
}
