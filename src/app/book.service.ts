import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getAllBooks():any[]{
    return [
      {
        "id" :1,"name":"HTML5"},
        {"id":2,"name":"CSS3"},
        {"id" :3, "name" :"Javascript"},
        {"id" :4,"name" : "Ajax Programming"}
      
    ];
  }
}
