import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  posts: Post[];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  name: string = 'John Carter';
  age: number = 18;

  users: string[] = ['Ryan', 'Joe', 'Cameron'];

  sayHello() {
    console.log('Hello');
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++)
    {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

}