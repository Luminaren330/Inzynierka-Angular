import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { MakeorderComponent } from './pages/makeorder/makeorder.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AddWorkerComponent } from './pages/addworker/addworker.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'makeorder',
    component: MakeorderComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'workers',
    component: WorkersComponent,
  },
  {
    path: 'workers/addworker',
    component: AddWorkerComponent,
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
