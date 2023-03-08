import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../services/data.service"
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  payload: any;

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
        console.log(value)

        this.dataService.isloggedIn = true
        this.router.navigate(['/start_menu']);
      }, error: err => {
        this.dataService.isloggedIn = false
        this.authService.logout();
        this.snackBar.open(`ANMELDUNG FEHLGESCHLAGEN: Versuchen Sie es erneut!`, undefined, { panelClass: 'snackbar-dark'});
      }, complete: () => {
        console.log("Login Request is completed")
      }
    });
  }
  ngOnInit(): void {
  }
}
