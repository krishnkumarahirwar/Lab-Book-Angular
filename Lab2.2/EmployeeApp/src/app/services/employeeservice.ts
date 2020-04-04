import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
   new Employee(2,'shashank',25000,"JAVA"),
   new Employee(1,'anirudh',20000,"Angular"),
   new Employee(5,'krishna',20000,"Js"),
   new Employee(4,'Navdeep',21000,"Java"),
   new Employee(3,'kislaya',24000,"Angular")
];   
 


  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}