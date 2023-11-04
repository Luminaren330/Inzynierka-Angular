import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { MakeorderComponent } from './pages/makeorder/makeorder.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AddWorkerComponent } from './pages/addworker/addworker.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'makeorder',
    component: MakeorderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'workers',
    component: WorkersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'workers/addworker',
    component: AddWorkerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/addnewproduct',
    component: AddproductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate: [AuthGuard]
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
