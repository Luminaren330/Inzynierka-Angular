import { Component, Input, OnInit} from '@angular/core';
import {Product} from '../../pages/products/products-interface.component'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../global-login.component'

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: [ './products-table.component.scss'
  ]
})
export class ProductsTableComponent implements OnInit  {

  @Input() filteredproductlist: Product[] = []; 

  login: { isLogedin: boolean; isAdmin: boolean } = Login;
  
  
  displayedColumns: string[] = 
  ['Category', 'Name', 'Material', 'UnitPrice', 
  'Amount', 'CartAmount', 'Actions'];
  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
      if(Login.isLogedin && !Login.isAdmin) {
        this.displayedColumns = ['Category', 'Name', 'Material', 
        'MagazinePlacement', 'UnitPrice', 'Amount'];
      }
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
      }, () => {
        this.router.navigate(['/error']);
      });
    } else {
      alert('Nie można dodać 0 przedmiotów do koszyka');
    }
  }

  addProduct(productId: number, cartAmount: number) {
    console.log(productId);
    console.log(cartAmount);
    if (cartAmount > 0) {
      this.http.put('http://localhost:3001/products/addproduct', {
        ObjectSID: productId,
        Amount: cartAmount
      }).subscribe(() => {
        alert('Dodano ilość produktów');
        this.resetComponent();
      }, () => {
        this.router.navigate(['/error']);
      });
    } else {
      alert('Nie można dodać 0 do przedmiotów');
    }
  }

}
