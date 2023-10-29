import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: [ './workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: any[] = [];
  index: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this.http.get('http://localhost:3001/workers').subscribe((response: any) => {
      this.workers = response;
    });
  }

  selectWorker(index: number) {
    this.index = index;
  }

}
