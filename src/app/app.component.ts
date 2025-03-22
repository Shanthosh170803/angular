import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';
  customer:any=[];
  constructor(private customerservice : CustomerService){}

  ngOnInit() {
    this.customer = this.customerservice
      .getAllCustomer()
      .subscribe((cust) => (this.customer = cust));
    console.log(this.customer);
  }
}
