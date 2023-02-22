import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outputdata:any;
  title="Angular Promises"
  API_KEY ="e40d07f00b094602953cc3bf8537477e"
  constructor(private httpClient:HttpClient){}
  ngOnInit(){
    console.log("Angular 10 Promises");
    this.fetchDataAsPromise().then((data)=>{
      console.log(JSON.stringify(data));
      this.outputdata=JSON.stringify(data);
    })
    .catch((error)=>{
      console.log("Promise rejected with" +JSON.stringify(error));
    });
  }

  fetchDataAsPromise(){
    return this.httpClient.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch &apikey=${this.API_KEY}'
    ).toPromise();
  }

}
