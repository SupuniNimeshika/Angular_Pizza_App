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
  address: Address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.title = 'app';
    this.name = 'Supuni Nimeshika';
    this.email = 'supuni.nimeshika@gmail.com';
    this.address = {
      no: 'Weerasewana',
      city: 'Lebeema',
      state: 'Matara'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }
}

interface Address {
  no: string;
  city: string;
  state: string;
}
