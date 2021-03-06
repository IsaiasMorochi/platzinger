import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  friends: User[];
  query: string = '';
  constructor(private userService: UserService, 
              private authenticationService: AuthenticationService, 
              private router: Router) {
    this.userService.getUsers().valueChanges().subscribe((data: User[]) => {
      this.friends = data;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logOut().then(() => {
      alert('Sesion Cerrada');
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log(error);
    });
  }

}