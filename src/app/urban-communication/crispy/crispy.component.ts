import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crispy',
  templateUrl: './crispy.component.html',
  styleUrls: ['./crispy.component.scss']
})
export class CrispyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
