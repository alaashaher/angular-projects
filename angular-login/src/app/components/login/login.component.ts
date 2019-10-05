import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: any;
  username: any;
  FilterArray: any;
  password: any;
  errorPassword: boolean;
  errorEmail: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.errorPassword = false;
    this.errorEmail = false;
    this.users = [
      { id: 1, username: 'alaa@gmail.com', password: '123456' },
      { id: 2, username: 'mohammed@gmail.com', password: '013579' }
    ];
  }

  submint(event) {
    event.preventDefault();
    this.FilterArray = this.users.filter(user => user.username.indexOf(this.username) > -1);
    console.log(this.FilterArray);
    if (this.FilterArray.length === 0) {
      this.errorEmail = true;
    } else if (this.password === this.FilterArray[0].password) {
      this.router.navigate(['HomeComponent']);
      console.log(this.password);
    } else {
      this.errorPassword = true;
    }
  }
}
