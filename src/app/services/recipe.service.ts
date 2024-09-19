import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
 
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  // getRecipes(): Observable<{ recipes: Recipe[] }> {
  //   return this.http.get<{ recipes: Recipe[] }>(this.apiUrl);
  // }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<{ recipes: Recipe[] }>(this.apiUrl).pipe(
      map(response => response.recipes)
    );
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  getSearchRecipe(searchValue: string): Observable<Recipe[]> {
    return this.http
      .get<{ recipes: Recipe[] }>(`${this.apiUrl}/search?q=${searchValue}`)
      .pipe(
        map((response) => response.recipes) 
      );
  }
}
