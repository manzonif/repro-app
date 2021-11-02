import { Component } from '@angular/core';
import { FindTestByNameGQL } from './fragment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private findTestByNameGQL: FindTestByNameGQL
  )
  {}
  title = 'repro-app';

}
