import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: [ './addworker.component.scss']
})
export class AddWorkerComponent {
  name: string = '';
  surname: string = '';
  phoneNumber: number = 0;
  position: string = 'Sprzedawca';
  wrong: boolean = false;
  empty: boolean = false;

  options: string[] = ['Sprzedawca', 'Magazynier', 'Menadżer'];

  constructor(private http: HttpClient,
    private router: Router) {}

    getName(value: string): void {
      this.name = value;
    }
  
    getPhone(value: string): void {
      this.phoneNumber = parseInt(value);
    }

    getSurname(value: string): void {
      this.surname = value;
    }

    getPosition(value: string): void {
      this.position = value;
    }
  
  
  addWorker(): void {
    this.empty = false;
    this.wrong = false;
    if (isNaN(this.phoneNumber) 
    || this.phoneNumber.toString().length !== 9) {
      this.wrong = true;
    } else if (this.name.length < 3 ||
      this.surname.length < 3) {
        this.empty = true;
      }
    else {
      this.http.post('http://localhost:3001/workers/addworker', {
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      position: this.position
      })
      .subscribe((res:any)=> {
        alert(res.text);
        this.router.navigate(['./workers']);
      },
      ()=> {
        this.router.navigate(['/error']);
      })
    }
  }
}