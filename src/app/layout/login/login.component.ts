import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { PeeljobsService } from '../../shared/services/peeljobs.service';


import { SocialAuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1: SocialUser;
  loggedIn: boolean;

  user = {
    email : '',
    password : ''
  };

  recruiter = {
    name : '',
    email : '',
    mobile : '',
    password : '',
    type: 'recruiter'
  };
  loginFlag = true;

  constructor(
    private auth: AuthService,
    private pjService: PeeljobsService,
    private authService1: SocialAuthService

  ) { }

  ngOnInit(): void {

    this.authService1.authState.subscribe((user1) => {
      this.user1 = user1;
      this.loggedIn = (user1 != null);
    });
  }
  signInWithGoogle(): void {
    this.authService1.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  submit (value) {
    if (value === "loginForm") {
      this.auth.authenticate(this.user);
    } else if (value === "mailForm"){
      console.log(this.recruiter)
    } else {

    }
  }

  check (value) {
    this.loginFlag = value;
  }


}
