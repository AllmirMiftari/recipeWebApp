import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() id!: number;
  @Input() name!: string;
  @Input() image!: string;
  @Input() cuisine!: string;
  @Input() rating!: number;

  ngOnInit(): void {}

  navigateToRecipe(id: number) {
    this.router.navigate([`recipe/${this.id}`]);
  }

}
