import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-urban-communication',
  templateUrl: './urban-communication.component.html',
  styleUrls: ['./urban-communication.component.css']
})
export class UrbanCommunicationComponent implements OnInit {
  constructor() { }
  currentSection = 'home';
  ngOnInit(): void {
    let i = 1;
    setInterval(() => {
      if (i === 1) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/UrbanCommunicationHome.png'; }
      else if (i === 2) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/UrbanCommunicationHome1.png'; }
      else { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/UrbanCommunicationHome2.png'; }
      if (i >= 3) { i = 0; }
      i++;
    }, 1200);
  }
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
