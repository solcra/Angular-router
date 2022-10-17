import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoiesComponent } from './categoies/categoies.component';
import { CategoryFormComponent } from './category-form/category-form.component';


const routes: Routes = [
  {
    path: '',
    component: CategoiesComponent
  },
  {
    path: 'create',
    component: CategoryFormComponent
  },
  {
    path: 'edit/:id',
    component: CategoryFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class categoriesRoutingModule { }
