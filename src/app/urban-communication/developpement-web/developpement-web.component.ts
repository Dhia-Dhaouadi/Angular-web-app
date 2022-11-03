import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developpement-web',
  templateUrl: './developpement-web.component.html',
  styleUrls: ['./developpement-web.component.scss']
})
export class DeveloppementWebComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
