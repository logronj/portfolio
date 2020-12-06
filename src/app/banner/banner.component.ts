import { Component, OnInit } from '@angular/core';
import Resume from '../resume.json';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  data = Resume;

  profiles = Resume.basics.profiles;

  constructor() { }

  ngOnInit(): void {
  }

}
