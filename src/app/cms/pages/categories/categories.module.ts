import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoiesComponent } from './categoies/categoies.component';
import { categoriesRoutingModule } from './categories-routing.module';



@NgModule({
  declarations: [
    CategoiesComponent
  ],
  imports: [
    CommonModule,
    categoriesRoutingModule
  ]
})
export class CategoriesModule { }
