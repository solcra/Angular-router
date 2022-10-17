import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup({
    name:  new FormControl('Soy un control', [Validators.required,Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl(''),
    color: new FormControl(''),
    date: new FormControl(''),
    number: new FormControl(''),
    category:  new FormControl('category-2'),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  formTwo: FormGroup;

  nameFiled = new FormControl('Soy un control', Validators.required);
  emailFiled = new FormControl('', [Validators.required,Validators.maxLength(10)]);
  telFiled = new FormControl('',Validators.required);
  colorFiled = new FormControl('');
  dateFiled = new FormControl('');
  numberFiled = new FormControl('');
  categoryField = new FormControl('category-2');
  tagFilen = new FormControl('');
  agreeFilen = new FormControl(false);
  genderFilen = new FormControl('');
  zoneFilen = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameFiled.valueChanges
    .subscribe(value => {
      console.log(value)
    });
    this.formTwo.valueChanges
    .subscribe(value => {
      console.log(value)
    });
    if(this.nameFiledValidControl){
      this.nameFiledValidControl.valueChanges
      .subscribe(value => {
        console.log(value)
      });
    }
  }

  getNameValue() {
    console.log(this.nameFiled.value)
  }

  get isNameFiledValid() {
    return this.nameFiled.valid && this.nameFiled.touched
  }

  get isNameFiledInValid() {
    return this.nameFiled.invalid && this.nameFiled.touched
  }

  get nameFiledValidControl() {
    return this.form.get('name');
  }

  get isNameFiledValidControl() {
    if (this.nameFiledValidControl != null) {
      return this.nameFiledValidControl.valid && this.nameFiledValidControl.touched
    } else {
      return null
    }

  }

  get isNameFiledInValidControl() {
    if (this.nameFiledValidControl != null) {
      return this.nameFiledValidControl.invalid && this.nameFiledValidControl.touched
    } else {
      return null
    }
  }

  save(){
    console.log(this.form);
    console.log(this.form.value);
  }

  private buildForm(){
    this.formTwo = this.formBuilder.group({
      fullName: this.formBuilder.group ({
        name: ['Soy un control',[ Validators.required,Validators.maxLength(10),Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
        lastName: ['Soy un control',[ Validators.required,Validators.maxLength(10),Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]]
      }),
      email: ['', [Validators.required,Validators.email]],
      tel: ['',Validators.required],
      color: [''],
      date: ['', [Validators.required,Validators.min(18),Validators.max(95)]],
      number: [''],
      category:  ['category-2'],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    })
  }

  get nameFiledValidCOntroelTwo() {
    return this.formTwo.get('fullName')?.get('name')
  }

  get lastNameFiledValidCOntroelTwo() {
    return this.formTwo.get('fullName.lastName')
  }

  get emailFiledValidCOntroelTwo(){
    return this.formTwo.get('email')
  }

  get telFiledValidCOntroelTwo(){
    return this.formTwo.get('tel')
  }

  get dateFiledValidCOntroelTwo(){
    return this.formTwo.get('date')
  }

  get agreeFiledValidCOntroelTwo(){
    return this.formTwo.get('agree')
  }

  get isNameFiledValidControlTwo() {
    if (this.nameFiledValidCOntroelTwo != null) {
      return this.nameFiledValidCOntroelTwo.valid && this.nameFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isNameFiledInValidControlTwo() {
    if (this.nameFiledValidCOntroelTwo != null) {
      return this.nameFiledValidCOntroelTwo.invalid && this.nameFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }

  get isLastNameFiledValidControlTwo() {
    if (this.lastNameFiledValidCOntroelTwo != null) {
      return this.lastNameFiledValidCOntroelTwo.valid && this.lastNameFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isLastNameFiledInValidControlTwo() {
    if (this.lastNameFiledValidCOntroelTwo != null) {
      return this.lastNameFiledValidCOntroelTwo.invalid && this.lastNameFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }

  get isEmailFiledValidControlTwo() {
    if (this.emailFiledValidCOntroelTwo != null) {
      return this.emailFiledValidCOntroelTwo.valid && this.emailFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isEmailFiledInValidControlTwo() {
    if (this.emailFiledValidCOntroelTwo != null) {
      return this.emailFiledValidCOntroelTwo.invalid && this.emailFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }

  get isTelFiledValidControlTwo() {
    if (this.telFiledValidCOntroelTwo != null) {
      return this.telFiledValidCOntroelTwo.valid && this.telFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isTelFiledInValidControlTwo() {
    if (this.telFiledValidCOntroelTwo != null) {
      return this.telFiledValidCOntroelTwo.invalid && this.telFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }

  get isDateFiledValidControlTwo() {
    if (this.dateFiledValidCOntroelTwo != null) {
      return this.dateFiledValidCOntroelTwo.valid && this.dateFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isDateFiledInValidControlTwo() {
    if (this.dateFiledValidCOntroelTwo != null) {
      return this.dateFiledValidCOntroelTwo.invalid && this.dateFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }

  get isAgreeFiledValidControlTwo() {
    if (this.agreeFiledValidCOntroelTwo != null) {
      return this.agreeFiledValidCOntroelTwo.valid && this.agreeFiledValidCOntroelTwo.touched
    } else {
      return null
    }

  }

  get isAgreeFiledInValidControlTwo() {
    if (this.agreeFiledValidCOntroelTwo != null) {
      return this.agreeFiledValidCOntroelTwo.invalid && this.agreeFiledValidCOntroelTwo.touched
    } else {
      return null
    }
  }




  saveTwo(){
    if(this.formTwo.valid){
      console.log(this.formTwo);
      console.log(this.formTwo.value);
    } else {
      this.formTwo.markAllAsTouched
    }
  }
}
