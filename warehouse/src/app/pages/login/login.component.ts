import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../../global-login.component'
import { Credentials } from './login-iterface.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials[] = [];
  username: string = '';
  password: string = '';
  isMatch: boolean = false;

  constructor(private http: HttpClient,
    private router: Router) {}

    ngOnInit(): void {
        this.getCredentials();
    };


    getCredentials(): void {
      this.http.get<Credentials[]>('https://mysql-warehouse.onrender.com/login').subscribe(
        (response)=> {
          this.credentials = response;
        }),
        () => {
          this.router.navigate(['/error']);
        }
    }

    handleLogin(): void {
      if (this.username === 'admin' && this.password === 'admin') {
        Login.isAdmin = true;
        Login.isLogedin = true
        alert('Pomyślnie zalogowano');
        this.router.navigate(['/dashboard']);
      } else {
        let isMatch = false;
  
        for (const credential of this.credentials) {
          if (credential.Login === this.username && credential.Password === this.password) {
            Login.isLogedin = true
            alert('Pomyślnie zalogowano');
            this.router.navigate(['/dashboard']);
            isMatch = true;
            break;
          }
        }
  
        if (!isMatch) {
          alert('Niepoprawne dane logowania');
        }
      }
    }   
}
