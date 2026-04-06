import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
})
export class Home {
  userName: string= "";
ngOnInit(): void {
    const loggedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (loggedUser) {
      this.userName = loggedUser.firstName
    }
  }

}
