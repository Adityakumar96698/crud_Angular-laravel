import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  	this.getEmployeesdata();
  }

  getEmployeesdata()
  {
  	 this.dataService.getData().subscribe(res => {
  	 	this.employees = res;
  	 });
  }

  insertData()
  {
    this.dataService.insertData(this.employee).subscribe(res => {
     this.getEmployeesdata();
    })
  }


  deleteData(id)
  {
    this.dataService.deleteData(id).subscribe(res => {
     this.getEmployeesdata();
    })
  }

}
