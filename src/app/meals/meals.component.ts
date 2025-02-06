import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICategory } from '../shared/interfaces/allcategories';
import { GetmealsService } from '../shared/services/getmeals/getmeals.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnChanges {
  mealsByCat: any;
  randomMeals: any;
  @Input() currentCategory!: any;
  @Input() selectedCategory!: any;
  @Input() currentLink: string = 'all';
  @Input() allMeals!: any;
  constructor(
    private _GetmealsService: GetmealsService,
    private _Router: Router
  ) {}
  ngOnChanges(): void {
    if (this.currentLink === 'all') {
      this.allMeals = [];
      this._GetmealsService.getMealsBySearch('').subscribe((res) => {
        this.allMeals = res.meals;
      });
    } else if (this.currentCategory && this.currentCategory.strCategory) {
      this._GetmealsService
        .getMealsByCategory(this.currentCategory.strCategory)
        .subscribe((res) => {
          this.mealsByCat = res.meals;
        });
    }
  }
}
