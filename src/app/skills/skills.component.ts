import { Component, OnInit } from '@angular/core';
import Resume from '../resume.json';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  data = Resume;
  frontend = Resume.skills.filter(x=>x.key === 'frontend');
  backend = Resume.skills.filter(x=>x.key === 'backend');
  database = Resume.skills.filter(x=>x.key === 'database');
  devops = Resume.skills.filter(x=>x.key === 'devops');

  constructor() { }

  ngOnInit(): void {
  }

}
