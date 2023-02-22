import { Component, OnInit } from '@angular/core';
import { EserviceService, Employee } from '../eservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {
  service:EserviceService;
  constructor(service:EserviceService,public router:Router) {
    this.service=service;
   }
   employees:Employee[]=[]
  ngOnInit(): void {
    this.service.fetchEmployees();
    this.employees=this.service.getEmployees();
  }
delete(eid:number)
{
  this.service.delete(eid);
}
update(eid:number)
{
  this.router.navigate(['app-update']);
}
}
