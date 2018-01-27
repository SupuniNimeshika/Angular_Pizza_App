import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Supuni Nimeshika';
  email = 'supuni.nimeshika@gmail.com';
  address = {
    no: 'Weerasewana',
    city: 'Lebeema',
    state: 'Matara'
  };
}
