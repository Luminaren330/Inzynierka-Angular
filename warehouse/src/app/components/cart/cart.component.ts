import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart-interface.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  @Input() cart: Cart[] = [];

  

  displayedColumns: string[] = ['CargoId', 'ObjectName', 'Amount', 'Price', 'Actions'];

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,) {

  }

  resetComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route
    })
  }
 

  deleteCart(id: number) {
    // Send a delete request to the API endpoint
    this.http
      .delete(`http://localhost:3001/products/deletecart/${id}`)
      .subscribe(
        (res: any) => {
          alert(res.text);
          this.resetComponent();
          // After a successful deletion, you may want to refresh the cart data
          // You can call a method to update the cart data here.
        },
        (error) => {
          console.error('Error deleting from cart', error);
        }
      );
  }
}