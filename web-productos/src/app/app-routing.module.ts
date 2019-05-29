import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductCatComponent} from './product-cat/product-cat.component';

const routes: Routes = [{
    path:'products',
    component: ProductsComponent,
    data: {title:'Lista de productos'}
  },
  {
    path:'product-details/:id',
    component: ProductDetailComponent,
    data:{title:'Detalle de producto'}
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data:{title:'Agregar nuevo producto'},
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: {title: 'Editar datos de producto'}
  },
  {
    path: 'product-catalog',
    component: ProductCatComponent,
    data:{title:'Catálogo de productos'}
  },
  {
    path:'',
    redirectTo:'/products',
    pathMatch:'full'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
