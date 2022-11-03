import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinetblancard',
  templateUrl: './cabinetblancard.component.html',
  styleUrls: ['./cabinetblancard.component.scss']
})
export class CabinetblancardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
