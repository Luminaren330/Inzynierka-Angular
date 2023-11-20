import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: [ './makeorder.component.scss']
})
export class MakeorderComponent  {

  name: string = '';
  phoneNumber: number = 0;
  address: string = '';
  zipcode: string = '';
  wrong: boolean = false;
  empty: boolean = false;

  constructor(private http: HttpClient, 
    private router: Router) {}

  getName(value: string): void {
    this.name = value;
  }

  getPhone(value: string): void {
    this.phoneNumber = parseInt(value);
  }

  getAddress(value: string): void {
    this.address = value;
  }
  getZipCode(value: string): void {
    this.zipcode = value;
  }

  createOrder(): void {
    this.wrong = false;
    this.empty = false;
    if (
      isNaN(this.phoneNumber) ||
      this.phoneNumber.toString().length !== 9 ||
      this.zipcode.length !== 6 ||
      !this.zipcode.includes('-')
    ) {
      this.wrong = true;
    } else if (
      this.name.length < 3 ||
      this.address.length < 10
    ) {
      this.empty = true;
    }
    else {
      this.http
        .post('http://localhost:3001/makeorder/createorder', {
          phoneNumber: this.phoneNumber,
          address: this.address,
          zipcode: this.zipcode,
          name: this.name
        })
        .subscribe(
          (res: any) => {
            alert(res.text);
            this.router.navigate(['/dashboard']);
          },
          () => {
            this.router.navigate(['/error']);
          }
        );
    }
  }


}
