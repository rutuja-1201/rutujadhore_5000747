/*
import { Component ,OnInit,OnChanges,DoCheck,OnDestroy} from '@angular/core';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnChanges,DoCheck,OnDestroy{
  ngOnInit(): void {
      console.log("view is initialized");
  }
  ngOnChanges():void{
    console.log("changes is done")
  }

  ngDoCheck():void{
    console.log("checked");
  }
  ngOnDestroy(): void {
      console.log("view is destroyed");
  }
}*/


	import { Component } from '@angular/core';
	import { FormBuilder, FormGroup } from '@angular/forms';	
  	@Component({
	  selector: 'login-root',
	  templateUrl: './login.component.html',
	  styleUrls: ['./login.component.css']
	})
	export class LoginComponent {
	  title = 'directives-app';

      userName: string='';
 password: string='';
  loginSuccess = false;
  loginFailed = false;
	
	  login() {
	    this.loginFailed = this.loginSuccess = false;
    if (this.userName == "admin" && this.password == "admin@123") {
	      this.loginSuccess = true
    } else {
	      this.loginFailed = true;
	    }
	  }
	}

/*export class LoginComponent {
  login:Login =new Login();
  result:string =""; 
  validate() {
         if(this.login.id==="innovapptive" &&  this.login.pwd==="welcomeinnovapptive")
          this.result = "success";
        else
         this.result="error";
     }

    submit(){
      if (this.login.id==="innovapptive" && this.login.pwd ==="welcomeinnovapptive")
      this.result="submitted";
      else
      this.result=" submitted";

    }

    reset(){
      if (this.login.id==="innovapptive" && this.login.pwd === "welcomeinnovapptive")
      this.result="no need to reset"
      else
      this.result="reset your id or password"
    }
 
 
 }*/