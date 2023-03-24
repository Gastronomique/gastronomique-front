import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  username: string = this.authService.getLoggedInUserName();

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
