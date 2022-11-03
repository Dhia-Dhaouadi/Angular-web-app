import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-butcher',
  templateUrl: './butcher.component.html',
  styleUrls: ['./butcher.component.scss']
})
export class ButcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
