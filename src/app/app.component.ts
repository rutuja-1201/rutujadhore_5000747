import { Component } from '@angular/core';
import { of } from 'rxjs';  
import * as Rx from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

}
/*

  const array = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12);  
  const list = array.subscribe(val => console.log(val)); 

  const observable1 =Rx.Observable.create((observer:any) => {
    observer.next(Math.random())
   
  });
  observable1.subscribe((data:any)=>{
    console.log(data);
  })*/
  
  
 