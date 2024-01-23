import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { CommonService } from '../service/commonService.service';
interface IEmployeeDetails {
  empId: number;
  name: string;
  phone: number;
  email: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
})
export class HomepageComponent implements OnInit {
  data: any;
  EmployeeDetails: IEmployeeDetails[] = [
    // { empId: 1, name: 'ramya', phone: 6301748651, email: 'ramyatn31@gmail' },
    // { empId: 2, name: 'ramya', phone: 6301748651, email: 'ramyatn31@gmail' },
    // { empId: 3, name: 'ramya', phone: 6301748651, email: 'ramyatn31@gmail' },
    // { empId: 4, name: 'ramya', phone: 6301748651, email: 'ramyatn31@gmail' },
    // { empId: 5, name: 'ramya', phone: 6301748651, email: 'ramyatn31@gmail' },
  ];

  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  navigateForUpdate(emp:any) {
    console.log(emp);
    
    this.router.navigate(['/formBox'],{state:{data:emp}})
  };
  navigateToForm() {
    this.router.navigate(['/formBox'])
  };

  getEmployee() {
    this.commonService.getEmp().subscribe((response: any = {}) => {
      this.data = response;
      console.log(this.data);
    });
  }

  deleteItem(id: number){
    alert()
    console.log("🚀 ~ HomepageComponent ~ deleteItem ~ id:", id)
    this.commonService.deleteEmployee(id).subscribe(() => {
     this.getEmployee();
    });
  }

}
