import { Component, OnInit } from '@angular/core';
import Resume from '../resume.json';
import { trigger, state, style, transition, animate, keyframes, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class BannerComponent implements OnInit {

  bounce: any;
  data = Resume;

  profiles = Resume.basics.profiles;

  constructor() { }

  ngOnInit(): void {
  }

}
