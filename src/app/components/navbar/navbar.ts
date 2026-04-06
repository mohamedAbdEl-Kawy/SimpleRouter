import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar implements OnInit{
  userName: string = "";
  ngOnInit(): void {
    const logedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (logedUser) {
      this.userName = logedUser.firstName;
    }
  }
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedInUser');
    this.userName = "";
    this.router.navigate(['/login']);
  }
}
