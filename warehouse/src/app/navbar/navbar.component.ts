import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { links } from './navbar-data'
import { Login } from '../global-login.component'

@Component( { 
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit { 
    showLinks: boolean = false;
    logedInText: string = 'Zaloguj';
    linksHeight: number = 0;
    links = links;
    logedIn: boolean = false;
    login: { isLogedin: boolean; isAdmin: boolean } = Login;

    @ViewChild('linksRef', { read: ElementRef }) linksRef!: ElementRef;
    constructor(private router: Router) {}

    ngOnInit(): void {
        if(Login.isAdmin || Login.isLogedin) {
          this.logedInText = "Wyloguj";
        }
        else {
          this.logedInText = "Zaloguj";
        }
    }

    ngAfterViewInit(): void {
    this.linksHeight = this.linksRef.nativeElement.getBoundingClientRect().height;
  }

    toggleLogin(): void {
      if(!Login.isLogedin) { 
        this.router.navigate(['./login']);
      }
      else {
        Login.isAdmin = false;
        Login.isLogedin = false;
        alert("Pomyślnie wylogowano");
        this.router.navigate(['./dashboard']).then(()=> {
          window.location.reload();
        })
        
      }
    }
    toggleLinks(): void {
    this.showLinks = !this.showLinks;
    this.linksHeight = this.linksRef.nativeElement.getBoundingClientRect().height;
  }
}
