import { Component, enableProdMode } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {
  employee: any={
    ename:'',
    email:'',
    password:'',
    gender:'',
    ismarried:false,
  };

  submitted = false;
  constructor(private empService: EmpService, public router: Router) {}
  addEmployee() {
    console.log(this.employee);
    this.empService
      .createEmployee(this.employee)
      .subscribe((data: {}) => this.router.navigate(['/listallemp']));
  }

  onSubmit() {
    this.submitted = true;
    alert('Employee datas are validated successfully!');
  }
}

