import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products-interface.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  filteredProductList: any[] = [];
  filterCategory: string = '';
  categoryList: string[] = [];
  cart: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    this.getProducts();
    this.getCart();
    
  }

  getProducts() {
    this.http.get<Product[]>('http://localhost:3001/products').subscribe(
      (response) => {
        this.productList = response;
        this.filteredProductList = response;
        this.categoryList = Array.from(new Set(response.map((product) => product.Category)));
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }

  getCart() {
    this.http.get<any[]>('http://localhost:3001/products/cart').subscribe(
      (response) => {
        this.cart = response;
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }

  applyFilter(category: string) {
    this.filteredProductList = this.productList.filter((product) => {
      return category === "" || product.Category === category;
      
    });
  }
}