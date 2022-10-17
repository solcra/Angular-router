import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MyValidators } from 'src/app/utils/validators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    console.log("HOla")
  }

  onExit(){
    const rta = confirm('Logita desde compo, Estas seguro de salir?')
    return rta;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6), MyValidators.validPassword]],
      confirmPassword: ['',[Validators.required]],
      type:['company',[Validators.required]],
      companyName: ['',[Validators.required]]
    },{
      validators: MyValidators.matchPasswords
    });
    this.typeFiled?.valueChanges
    .subscribe(value => {
      console.log(value);
      if (value == 'company'){
        this.companyName?.setValidators([Validators.required]);
      } else {
        this.companyName?.setValidators(null);
      }
      this.companyName?.updateValueAndValidity();
    })
  }

  get typeFiled(){
    return this.form.get('type')
  }

  get companyName(){
    return this.form.get('companyName')
  }

  save(){
    if(this.form.valid){
      console.log(this.form);
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched
    }
  }

}
