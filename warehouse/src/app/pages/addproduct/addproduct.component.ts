import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: [ './addproduct.component.scss']
})
export class AddproductComponent  {
  name: string = '';
  magazine: string = '';
  material: string = '';
  unitPrice: number = 0;
  amount: number = 0;
  category: string = 'Filtr';
  wrong: boolean = false;
  badPrice: boolean = false;

  magazineOptions: string[] = [
    'A','B','C'
  ]
  categoryOptions: string[] = [
    'Filtr','Hamulec','Akumulator','Tłumik']

  constructor(private http: HttpClient,
    private router: Router) {}

    getName(value: string): void {
      this.name = value;
    }
    
    getMagazine(value: string): void {
      this.magazine = value;
    }

    getMaterial(value: string): void {
      this.material = value;
    }

    getUnitPrice(value: string): void {
      this.unitPrice = parseFloat(value);
    }

    getAmount(value: string): void {
      this.amount = parseInt(value);
    }

    getCategory(value: string): void {
      this.category = value;
    }

    addNewProduct(): void {
      this.badPrice = false;
      this.wrong=false;
      if(this.name.length < 3 ||
        this.material.length < 3) {
          this.wrong = true;
        }
        else if(this.amount <=0 ||
          this.unitPrice <=0) {
            this.badPrice = true;
          }
          else {
      this.http.post("https://mysql-warehouse.onrender.com/products/addnewproduct", {
        name: this.name,
        magazine: this.magazine,
        material: this.material,
        unitPrice: this.unitPrice,
        amount: this.amount,
        category: this.category
      })
      .subscribe((res: any) => {
        alert(res.text);
        this.router.navigate(['./products']);
      }, () => {
        this.router.navigate(['/error']);
      });
    }
  }

}
