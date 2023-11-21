import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from './order-iterface.component'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = [
    'orderId',
    'client',
    'address',
    'zipcode',
    'phoneNumber',
    'items',
    'worker',
    'action'
  ];
  orders: Order[] = [];

  constructor(private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.getOrders();
  }

  resetComponent(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route
    })
  }

  getOrders(): void {
    this.http
      .get<Order[]>('https://mysql-warehouse.onrender.com/orders')
      .subscribe(
        (response) => {
          this.orders = response;
        },
        () => {
          this.router.navigate(['/error']);
        }
      );
  }

  orderEnded(orderId: number): void {
    this.http
      .delete(`https://mysql-warehouse.onrender.com/orders/${orderId}`)
      .subscribe(
        () => {
          alert('Zamówienie ' + orderId + ' zostało zrealizowane');
          this.resetComponent();
        },
        () => {
          this.router.navigate(['/error']);
        }
      );
  }
}
