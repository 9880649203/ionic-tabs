import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe;
  constructor(private RecipeService:RecipeService,
    private navCntl:NavController,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if(!paramMap.has('recipe-details')){
        return
      }
     const routId = paramMap.get('recipe-details');
     console.log('id',routId);
      this.loadedRecipe =  this.RecipeService.getRecipeId(routId);
      console.log('this.loadedRecipe',this.loadedRecipe)
    })
  }

  naviagte(){
    this.navCntl.navigateBack('tabs/tab3');
  }

}
