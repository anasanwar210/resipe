import { Component, OnInit } from '@angular/core';
import { GetmealsService } from '../shared/services/getmeals/getmeals.service';
import { MealsComponent } from '../meals/meals.component';
import { ICategory } from '../shared/interfaces/allcategories';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [MealsComponent, NgClass, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  myCat = [
    { strCategory: 'Beef' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Lamb' },
    { strCategory: 'Miscellaneous' },
    { strCategory: 'Pasta' },
    { strCategory: 'Pork' },
    { strCategory: 'Seafood' },
    { strCategory: 'Side' },
    { strCategory: 'Starter' },
    { strCategory: 'Vegan' },
    { strCategory: 'Vegetarian' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Goat' },
  ];

  allMeals: any[] = [];
  activeCategory: string = 'all';
  allCategories: any;
  currentCategory: any;
  currentLink: string = '';
  selectedCategory!: any;
  constructor(private _GetmealsService: GetmealsService) {}
  ngOnInit(): void {
    this.currentLink = 'all';
    this.getAllMeals();
    this._GetmealsService.getAllCategories().subscribe((res) => {
      this.allCategories = res.categories;
    });
  }

  sendCategory(category: ICategory) {
    this.currentCategory = category;
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  getAllMeals(): void {
    this._GetmealsService.getAllCategories().subscribe((res) => {
      const categories = res.categories.map((cat: any) => cat.strCategory);
      const categoryRequests = categories.map((category: string) =>
        this._GetmealsService.getMealsByCategory(category)
      );
      const searchRequest = this._GetmealsService.getMealsBySearch('');
      forkJoin([...categoryRequests, searchRequest]).subscribe(
        (responses: any[]) => {
          responses.forEach((response) => {
            if (response.meals) {
              this.allMeals = [...this.allMeals, ...response.meals];
            }
          });
        }
      );
    });
  }
  activeLink() {
    this.currentLink = 'all';
  }

  selectedCat(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategoryObj = this.allCategories.find(
      (category: any) => category.strCategory === target.value
    );

    if (selectedCategoryObj) {
      this.selectedCategory = selectedCategoryObj;
      this.currentCategory = selectedCategoryObj;
      this.currentLink = selectedCategoryObj.strCategory;
      this.setActiveCategory(selectedCategoryObj.strCategory);
      this.sendCategory(selectedCategoryObj);
    }
  }
}
