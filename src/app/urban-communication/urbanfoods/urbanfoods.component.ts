import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urbanfoods',
  templateUrl: './urbanfoods.component.html',
  styleUrls: ['./urbanfoods.component.scss']
})
export class UrbanfoodsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
