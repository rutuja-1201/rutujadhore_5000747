import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
courses =[
  {courseId :1 ,courseName :"Node js"},
  {courseId :2 ,courseName :"Typescript"},
  {courseId :3 ,courseName :"Angular"},
  {courseId :4,courseName :"Reactjs"}
];

@Input() cName:string='';
}
