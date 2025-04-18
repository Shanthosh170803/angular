import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
   title = 'emspro';
   submitted=false;
    employees: any=[];
    selectedId: number = 0;
    constructor(private empservice: EmpService,private router: Router){}
  
    ngOnInit(){
      this.employees=this.empservice.getAllEmployees().subscribe((emp)=>(this.employees=emp));
      console.log(this.employees);
    }
    onDelete(emp: Employee) {
      this.selectedId = emp.eid;
      console.log(emp);
      this.empservice
        .deleteEmployee(this.selectedId)
        .subscribe((data: {}) => this.router.navigate(['/listallemp']));
    }
    updateEmployee() {
      console.log(this.employees);
      this.empservice
        .updateEmployee(this.employees)		
        .subscribe((data: {}) => this.router.navigate(['/listallemp']));
    }
  
    onSubmit() {
      this.submitted = true;
      alert('Employee datas are validated successfully!');
    }

}
