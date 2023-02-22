import { Component, Input } from '@angular/core';
import { DateserviceService } from './dateservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today:any;
  constructor(private dateService:DateserviceService){}
  ngOnInit(){
    this.today=this.dateService.getTodayDate();
  }
  title:string="";
  color= "red";





}