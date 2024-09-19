import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchFormComponent,
    CommonModule,
    RecipeCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchValue = '';
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchValue = params['q'] || '';
      this.getSearchRecipeFromService();
    });
  }

  getSearchRecipeFromService(): void {
    this.recipeService
      .getSearchRecipe(this.searchValue)
      .subscribe((recipes) => {
        this.recipes = recipes;
        // console.log(this.recipes);
      });
  }

  onSearchSubmit(searchValue: string) {
    this.searchValue = searchValue;
    this.getSearchRecipeFromService();
  }
}
