import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent {
 
  customer:any={
    id:0,
    name:'',
  };
  submitted=false;
  constructor(private customerservice: CustomerService,public router: Router,private aroute:ActivatedRoute){}
  public id: any=this.aroute.snapshot.params['id'];

  ngOnInit(){
    this.customerservice.getCustomerById(this.id).subscribe((cust)=>(this.customer=cust));
    console.log(this.customer);
  }
  updateCustomer(){
    console.log(this.customer);
    this.customerservice.updateCustomer(this.customer).subscribe((data:{})=>this.router.navigate(['/readcustomer']));
  }
  onSubmit(){
    this.submitted=true;
    alert('Customer data validated............');
  }
}
