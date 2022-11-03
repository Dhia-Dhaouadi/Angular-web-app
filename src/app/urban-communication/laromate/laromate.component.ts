import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laromate',
  templateUrl: './laromate.component.html',
  styleUrls: ['./laromate.component.scss']
})
export class LaromateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
