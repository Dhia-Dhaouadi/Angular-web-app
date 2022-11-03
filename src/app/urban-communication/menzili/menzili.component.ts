import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menzili',
  templateUrl: './menzili.component.html',
  styleUrls: ['./menzili.component.scss']
})
export class MenziliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
