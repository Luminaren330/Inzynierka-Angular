import { Component, Input} from '@angular/core';
import {Product} from '../../pages/products/products-interface.component'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: [ './products-table.component.scss'
  ]
})
export class ProductsTableComponent  {

  @Input() filteredproductlist: Product[] = []; 
  
  
  displayedColumns: string[] = 
  ['Category', 'Name', 'Material', 'UnitPrice', 
  'Amount', 'CartAmount', 'Actions'];
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

  addToCart(productId: number, cartAmount: number) {
    if (cartAmount > 0) {
      this.http.post('http://localhost:3001/products/cartadd', {
        ObjectSID: productId,
        Amount: cartAmount
      }).subscribe(() => {
        alert('Dodano produkt do koszyka');
        this.resetComponent();
      }, (error) => {
        console.error(error);
        // Handle the error or navigate to an error page
      });
    } else {
      alert('Nie można dodać 0 przedmiotów do koszyka');
    }
  }

  addProduct(productId: number, cartAmount: number) {
    if (cartAmount > 0) {
      // Use Angular HttpClient to make a PUT request
      this.http.put('http://localhost:3001/products/addproduct', {
        ObjectSID: productId,
        Amount: cartAmount
      }).subscribe(() => {
        alert('Dodano ilość produktów');
      }, (error) => {
        console.error(error);
        // Handle the error or navigate to an error page
      });
    } else {
      alert('Nie można dodać 0 do przedmiotów');
    }
  }

}
