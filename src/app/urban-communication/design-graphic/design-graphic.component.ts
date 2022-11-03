import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-graphic',
  templateUrl: './design-graphic.component.html',
  styleUrls: ['./design-graphic.component.scss']
})
export class DesignGraphicComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
