import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
   'name': 'Introduction to Web Development',
   'level': 'Beginner'
 },
 {
   'name': 'Understanding APIs',
   'level': 'Intermediate'
 },
 {
   'name': 'Introduction to Docker Containers',
   'level': 'Advanced'
 },
 {
    'name': 'Understanding Time complexities',
     'level': 'Advanced'
 },
 {
     'name': 'Algorithms and Data Structures',
     'level': 'Advanced'
 },
 {
  'name': 'My first HTML page',
  'level': 'Beginner'
},
{
  'name': 'Ways to use CSS in your web page',
  'level': 'Beginner'
},
{
  'name': 'Introduction to Unit testing',
  'level': 'Intermediate'
},
{
  'name': 'What are PWAs',
  'level': 'Intermediate'
}
];
firstCourse = this.courses[0].name
  

  constructor() { }

  ngOnInit() {
  }

}
