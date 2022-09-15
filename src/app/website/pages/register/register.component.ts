import { Component, OnInit } from '@angular/core';
import {} from 'src/app/guards/exit.guard'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("HOla")
  }

  onExit(){
    const rta = confirm('Logita desde compo, Estas seguro de salir?')
    return rta;
  }

}
