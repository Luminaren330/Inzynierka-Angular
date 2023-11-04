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
      this.http.post("http://localhost:3001/products/addnewproduct", {
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
