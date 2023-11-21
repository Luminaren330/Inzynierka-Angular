import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: [ './workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: any[] = [];
  index: number = 0;

  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.http.get('https://mysql-warehouse.onrender.com/workers').subscribe((response: any) => {
      this.workers = response;
    }, ()=> {
      this.router.navigate(['/error']);
    });
  }

  selectWorker(index: number): void {
    this.index = index;
  }

}
