import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCategories, Meal } from '../../interfaces/allcategories';

@Injectable({
  providedIn: 'root',
})
export class GetmealsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllCategories(): Observable<IAllCategories> {
    return this._HttpClient.get<IAllCategories>(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
  }

  getMealsByCategory(category: string): Observable<any> {
    return this._HttpClient.get<any>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }

  getMealsBySearch(search: string): Observable<any> {
    return this._HttpClient.get<any>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
  }

  getMealsById(idMeal: string | number): Observable<any> {
    return this._HttpClient.get<any>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
  }
}

// <div class="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg">
//   <h2 class="text-xl font-bold font-[Pacifico] mb-4">Ingredients</h2>
//   <div class="border-t-2 border-gray-200 my-2"></div>
//   <ul class="space-y-2">
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Lentils:</span>
//       <span>1 cup</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Onion:</span>
//       <span>1 large</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Carrots:</span>
//       <span>1 large</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Tomato Puree:</span>
//       <span>1 tbs</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Cumin:</span>
//       <span>2 tsp</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Paprika:</span>
//       <span>1 tsp</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Mint:</span>
//       <span>1/2 tsp</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Thyme:</span>
//       <span>1/2 tsp</span>
//     </li>
//     <li class="flex justify-between text-sm">
//       <span class="font-semibold">Black Pepper:</span>
//       <span>1/4 tsp</span>
//     </li>
//   </ul>
// </div>
