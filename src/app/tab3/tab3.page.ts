import { Component } from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  recipes=[];
  constructor(private RecipeService:RecipeService) {}


  ngOnInit(){
    this.recipes=  this.RecipeService.getAllRecipe();
  }
}
