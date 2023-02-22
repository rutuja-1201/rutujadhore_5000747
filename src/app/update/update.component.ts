import { Component, OnInit } from '@angular/core';
import { EserviceService } from '../eservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  service:EserviceService;

  constructor(service:EserviceService,public router:Router) { 
    this.service=service;
  }

  ngOnInit(): void {
  }
  update(e:any){
      this.service.update(e);
      this.router.navigate(['app-listemp']);
    }

}
