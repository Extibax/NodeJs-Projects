import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Juan', 'Sebastian', 'Leon', 'John', 'Bruce'];
  activated: boolean = true;
  name: string = 'Ryan Ray';
}
