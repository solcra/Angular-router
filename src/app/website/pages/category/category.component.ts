import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  products: Product[] = [];
  limit = 10;
  offset = 0;
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if(this.categoryId){
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        } else {
          return []
        }
      })
    )
    .subscribe(data => {
      this.products = data;
    })
    // combalhelp
    // .subscribe(params => {
    //   this.categoryId = params.get('id');
    //   if(this.categoryId){
    //     this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
    //     .subscribe(data => {
    //       this.products = data;
    //     })
    //   }
    //   console.log(this.categoryId);
    // })
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      console.log(this.productId)
    })
  }

  onLoadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data)=>{
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
  }

}
