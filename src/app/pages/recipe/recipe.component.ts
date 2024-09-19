import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit{

  recipe!: Recipe ;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService) { }

  id!: number;

  ngOnInit(): void {
    this.router.params.subscribe((params)=> {this.id = params['id']});
    this.getRecipeFromServiceById();
      }

      getRecipeFromServiceById(){
        this.recipeService.getRecipeById(this.id).subscribe((data: Recipe) => {
          this.recipe = data;
      })
    
      }
}


