import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myinputMsg:string ='' ;
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  outputMessage:string="I am child component"
  constructor(){
    
  }
  ngOnInit():void {
    console.log(this.myinputMsg);
  }
  sendvalues(){
    this.myOutput.emit(this.outputMessage);
}


}


