import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoriId: string;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.categoriId = params.id;
    })
    if(this.categoriId){
      this.getCategory();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(4)], MyValidators.valiidateCategory(this.categoriesService)],
      image: ['',[Validators.required]]
    })
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField(){
    return this.form.get('image');
  }

  save(){
    if(this.form.valid){
      this.createCategory();
    } else {
      this.form.markAllAsTouched();
    }
    console.log(this.form);
  }

  private createCategory(){
    const data = this.form.value;
    this.categoriesService.createCategory(data)
    .subscribe(res =>{
      console.log(res)
      this.router.navigate(['./crs/categories'])
    })
  }

  private getCategory(){
    this.categoriesService.getCategory(this.categoriId)
    .subscribe(res =>{
      console.log(res)
      this.form.patchValue(res);
      this.nameField?.setValue(res.name);
    })
  }
  private updateCAtegory(){
    const data = this.form.value;
    this.categoriesService.updateCategory(this.categoriId, data)
    .subscribe(rta => {
      this.router.navigate(['/crs/categories'])
    })
  }

  archiov(event2:any){
    console.log(event2);
  }

}