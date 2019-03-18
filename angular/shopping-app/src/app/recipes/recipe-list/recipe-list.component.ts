import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [ new Recipe('Pasta','Pasta Recipe','https://www.aspicyperspective.com/wp-content/uploads/2017/02/best-italian-pasta-salad-13.jpg' ) ];
	

  constructor() { }

  ngOnInit() {
  }

}
