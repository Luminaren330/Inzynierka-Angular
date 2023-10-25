import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { links } from './navbar-data'

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

    @ViewChild('linksRef', { read: ElementRef }) linksRef!: ElementRef;
    constructor(
        private router: Router,
    ) {
        
    }

    ngOnInit(): void {
        
    }

    ngAfterViewInit() {
    this.linksHeight = this.linksRef.nativeElement.getBoundingClientRect().height;
  }

    toggleLogin(): void {
        this.logedIn =! this.logedIn;
        this.logedIn ? this.logedInText = 'Wyloguj' : this.logedInText = 'Zaloguj';
    }
    toggleLinks(): void {
    this.showLinks = !this.showLinks;
  }
}
