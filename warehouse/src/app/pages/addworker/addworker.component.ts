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

  options: string[] = ['Sprzedawca', 'Magazynier', 'Menadżer'];

  constructor(private http: HttpClient,
    private router: Router) {}

    getName(value: string) {
      this.name = value;
    }
  
    getPhone(value: string) {
      this.phoneNumber = parseInt(value);
    }

    getSurname(value: string) {
      this.surname = value;
    }

    getPosition(value: string) {
      this.position = value;
    }
  
  
  addWorker() {
    if (isNaN(this.phoneNumber) || this.phoneNumber.toString().length !== 9) {
      this.wrong = true;
    } else {
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