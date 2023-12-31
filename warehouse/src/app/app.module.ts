import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/filter/filter.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MakeorderComponent } from './pages/makeorder/makeorder.component';
import { StringInputComponent } from './components/string-input/string-input.component';
import { FormatInputComponent } from './components/format-input/format-input.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AddWorkerComponent } from './pages/addworker/addworker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { FloatInputComponent } from './components/float-input/float-input.component';
import { IntInputComponent } from './components/int-input/int-input.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductsComponent,
    ProductsTableComponent,
    CartComponent,
    FilterComponent,
    MakeorderComponent,
    StringInputComponent,
    FormatInputComponent,
    OrdersComponent,
    WorkersComponent,
    AddWorkerComponent,
    DropdownComponent,
    AddproductComponent,
    FloatInputComponent,
    IntInputComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
