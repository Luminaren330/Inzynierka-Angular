import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products-interface.component'
import { Router } from '@angular/router';
import { Login } from '../../global-login.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  filteredProductList: Product[] = [];
  filterCategory: string = '';
  categoryList: string[] = [];
  cart: any[] = [];
  login: { isLogedin: boolean; isAdmin: boolean } = Login;
  
  constructor(private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    
    this.getProducts();
    this.getCart();
    
  }

  getProducts(): void {
    this.http.get<Product[]>('http://localhost:3001/products').subscribe(
      (response) => {
        this.productList = response;
        this.filteredProductList = response;
        this.categoryList = Array.from(new Set(response.map((product) => product.Category)));
      },
      () => {
        this.router.navigate(['/error']);
      }
    );
  }

  getCart(): void {
    this.http.get<any[]>('http://localhost:3001/products/cart').subscribe(
      (response) => {
        this.cart = response;
      },
      () => {
        this.router.navigate(['/error']);
      }
    );
  }

  applyFilter(category: string) :void {
    this.filteredProductList = this.productList.filter((product) => {
      return category === "" || product.Category === category;
      
    });
  }
}