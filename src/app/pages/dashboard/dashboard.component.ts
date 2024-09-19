import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RecipeCardComponent, CommonModule, SearchFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  
  responseRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  onSearchSubmit(searchValue: string) {
    this.router.navigate(['/search'], { queryParams: { q: searchValue } });
  }

  ngOnInit(): void {
    this.getRecipesFromService();
  }

  getRecipesFromService(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        // Filter recipes with rating >= 4.9 
        this.responseRecipes = data.filter(
          (recipe: Recipe) => recipe.rating >= 4.9
        );
        // console.log('Data received:', this.responseRecipes);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
