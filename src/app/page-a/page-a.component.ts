import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent implements OnInit {


  constructor() { }
  localeVar: string = '';

  ngOnInit() {

    this.localeVar = $localize`test app`;
  }

}
