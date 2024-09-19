import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'recipe/:id',
  component: RecipeComponent
}, {
  path: 'search',
  component: SearchComponent
}];





