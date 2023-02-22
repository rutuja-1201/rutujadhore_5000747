import { Injectable } from '@angular/core';
//import { Date } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class DateserviceService {
  constructor() { }
  getTodayDate(): any{
   return new Date();
  }
}