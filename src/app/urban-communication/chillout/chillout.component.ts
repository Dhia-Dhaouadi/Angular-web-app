import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chillout',
  templateUrl: './chillout.component.html',
  styleUrls: ['./chillout.component.scss']
})
export class ChilloutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
