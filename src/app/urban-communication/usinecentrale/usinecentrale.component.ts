import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usinecentrale',
  templateUrl: './usinecentrale.component.html',
  styleUrls: ['./usinecentrale.component.scss']
})
export class UsinecentraleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
