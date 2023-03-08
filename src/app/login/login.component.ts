import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../services/data.service"
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  payload: any;
  role:any;

  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router,public dataService: DataService) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  login(): void {
    const val = this.loginForm.value;
    this.authService.login(val.username, val.password).subscribe({
      next: value => {
        sessionStorage.setItem('id_token', value.token);
        sessionStorage.setItem('expires_at', value.expires_at);
        // console.log(value)
        const decodedToken = jwt_decode(value.token)
        console.log(decodedToken);
        // @ts-ignore
        this.role = decodedToken.groups[0];
        console.log(this.role)
        this.dataService.role = this.role

        this.dataService.isloggedIn = true
        if(this.role == 'admin'){
          this.router.navigate(['/start_menu']);
        }else {
          this.router.navigate(['/menu'])
        }

      }, error: err => {
        this.dataService.isloggedIn = false
        this.authService.logout();
        this.snackBar.open(`ANMELDUNG FEHLGESCHLAGEN: Versuchen Sie es erneut!`, undefined, { panelClass: 'snackbar-dark'});
      }, complete: () => {
        // console.log("Login Request is completed")
      }
    });
  }
  ngOnInit(): void {
  }
}
