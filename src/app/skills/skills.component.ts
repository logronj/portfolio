import { Component, OnInit } from '@angular/core';
import Resume from '../resume.json';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  data = Resume;

  constructor() { }

  ngOnInit(): void {
  }

}
