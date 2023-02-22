import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  orders :any[]	=[
  { orderId: 2001, productName: "iphone 11 pro", quantity: 1, billAmount: 1850, transaction:'completed' },
    	  { orderId: 2002, productName: "iphone 10", quantity: 1, billAmount: 990, transaction:'pending' },
      { orderId: 2003, productName: "Samsung Galaxy S10", quantity: 2, billAmount: 1980, transaction:'completed' },
    	  { orderId: 2004, productName: "Motorolla Edge+", quantity: 1, billAmount: 980, transaction:'pending' }
    	] 
    
  
}
