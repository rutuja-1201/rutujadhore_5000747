import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EserviceService {
  http:HttpClient;
  employees:Employee[]=[]; // array to store Employee components
  constructor(http:HttpClient){ // there is a dependency on http, so @Injectable required
      this.http=http;
  }
  fetched:boolean=false;
  fetchEmployees(){
       this.http.get('./assets/employees.json').subscribe(
         data=>{
           if(!this.fetched){  
             this.convert(data); // send json to convert function
             this.fetched=true;
           }
         });        
      }
      getEmployees():Employee[]{
        return this.employees;
 }
 convert(data:any){ // convert json into Employee components
    for(let o of data){
      let e=new Employee(o.id,o.name);
      this.employees.push(e); // store in employees array
    }
 }
 delete(eid:number){
   let foundIndex:number=-1;
   for(let i=0;i<this.employees.length;i++){
      let e=this.employees[i];
      if(eid==e.id){
        foundIndex=i ;
        break;
      }
  }
  this.employees.splice(foundIndex,1);  
}
update(eid:any)
{
   for(let i=0;i<this.employees.length;i++){
      let e=this.employees[i];
      if(eid.id==e.id){
        console.log(eid.name);
        this.employees.splice(i,1);  
        this.employees.push(eid);
        console.log(e.name);
        break;
      }
  }
}
add(e:Employee){
    this.employees.push(e);
}
}
export class Employee{
  id:number;
  name:string;
  constructor(id:number,name:string){
    this.id=id;
    this.name=name;
 }
}