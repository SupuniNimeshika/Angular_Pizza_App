import { Component } from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name: string;
  email: string;
  address = {
    no: 'Weerasewana',
    city: 'Lebeema',
    state: 'Matara'
  };
  constructor() {
    this.title = 'app';
    this.name = 'Supuni Nimeshika';
    this.email = 'supuni.nimeshika@gmail.com';
    this.address = {
      no: 'Weerasewana',
      city: 'Lebeema',
      state: 'Matara'
    };
  }
}
