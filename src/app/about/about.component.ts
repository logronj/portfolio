import { Component, OnInit } from '@angular/core';
import Resume from '../resume.json';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  data = Resume;
  interests = Resume.interests;

  //  data: Resume, interests: Resume.data; 
  constructor() { }

  ngOnInit(): void {
  }

}
