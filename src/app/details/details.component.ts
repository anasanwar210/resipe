import { Component, OnInit } from '@angular/core';
import { GetmealsService } from '../shared/services/getmeals/getmeals.service';
import { Meal } from '../shared/interfaces/allcategories';
import { CommonModule, KeyValuePipe, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  currentMeal!: Meal;
  cleanedMeal!: any;
  idMeal!: any;
  constructor(
    private _GetmealsService: GetmealsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.idMeal = res['id'];
        console.log(typeof this.idMeal);
        console.log(res);
      },
    });
    this._GetmealsService.getMealsById(`${this.idMeal}`).subscribe((res) => {
      this.currentMeal = res.meals[0];
      this.cleanedMeal = this.cleanMealData(this.currentMeal);
      console.log('Cleaned Meal:', this.cleanedMeal);
    });
  }
  cleanMealData(meal: any): any {
    const filteredIngredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && measure) {
        filteredIngredients.push({
          key: ingredient,
          value: measure,
        });
      }
    }

    return filteredIngredients;
  }
}
