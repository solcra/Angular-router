import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoiesComponent } from './categoies/categoies.component';
import { categoriesRoutingModule } from './categories-routing.module';
import { CategoryComponent } from './containers/category/category.component';


@NgModule({
  declarations: [
    CategoiesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    categoriesRoutingModule,
  ]
})
export class CategoriesModule { }
