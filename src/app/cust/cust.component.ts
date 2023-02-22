import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor() {}
   //model =  new Customer("ram","reddy","ram@gmail.com","123456");
   submitted = false;

  onSubmit() { this.submitted = true; 
  console.log("submit...");
  //console.log(JSON.stringify(this.model));
  }

  // TODO: Remove this when we're done
  //outputmessage= JSON.stringify(this.model); 
 // get customerdata() { return JSON.stringify(this.model); }

}

