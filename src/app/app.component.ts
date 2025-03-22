import { Component } from '@angular/core';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emspro';
  employees: any=[];
  constructor(private empservice: EmpService){}

  ngOnInit(){
    this.employees=this.empservice.getAllEmployees().subscribe((emp)=>(this.employees=emp));
    console.log(this.employees);
  }
}
