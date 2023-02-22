import { Component, OnInit } from '@angular/core';
import { EserviceService } from '../eservice.service';
import { Routes,RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
service:EserviceService;
  constructor(service:EserviceService,private router: Router) { 
this.service=service;
  }

  ngOnInit(): void {
  }
  add(e:any){
  // let x={id:e.id,name:e.name};
  //   this.service.add(x);

    this.service.add(e);
 this.router.navigate(['app-listemp']);
  }

}
