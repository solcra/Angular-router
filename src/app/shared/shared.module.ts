import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { SwiperModule } from 'swiper/angular';
import { StepperComponent } from './components/stepper/stepper.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
    StepperComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  exports: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductComponent,
    ProductsComponent,
    ImgComponent,
    StepperComponent,
    SearchComponent
  ]
})
export class SharedModule { }
