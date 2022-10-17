import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/services/store.service'
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
    this.categoriesService.getAll()
    .subscribe(data => {
      this.categories = data;
    });
    this.authService.user$
    .subscribe(data => {
      this.profile = data
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    // this.authService.loginAndGet('john@mail.com', 'changeme') Usuario normal
    this.authService.loginAndGet('nicolas@nicolas.com', 'nicolas.2010')
    .subscribe(() => {
      this.route.navigate(['/profile'])
    });
  }

  logout(){
    this.profile = null;
    this.authService.logout();
    this.route.navigate(['/home']);
  }

}
