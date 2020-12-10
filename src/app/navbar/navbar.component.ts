import { Component, OnInit, ElementRef } from '@angular/core';
import Resume from "../resume.json";
import { ViewChild } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  data  = Resume;

  @ViewChild('navBurger') navBurger : ElementRef;
  @ViewChild('navMenu') navMenu : ElementRef;
  

  constructor() {
  }

  toggleNavbar(){
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > 400) {
      element.classList.add('bg-primary');
    } else {
      element.classList.remove('bg-primary');
    }
  }

  ngOnInit(): void {
  }

}
