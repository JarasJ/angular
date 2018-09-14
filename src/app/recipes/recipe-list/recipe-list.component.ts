import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kotletukai', 'Mesyte', 'https://g3.dcdn.lt/images/pix/purus-vistienos-kotletukai-su-kukuruzais-72402044.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
