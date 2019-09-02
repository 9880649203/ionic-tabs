import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes= [
    {
      id:1,
      img:"https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"pizza",
      ingredients:['french frieies','pizza','kaju']
  
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"kaju barfy",
      ingredients:['french frieies','pizza','kaju']
  
    },
  
    {
      id:3,
      img:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"dosa",
      ingredients:['french frieies','pizza','kaju']
  
    },
    {
      id:4,
      img:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"dosa",
      ingredients:['french frieies','pizza','kaju']
  
    }
  ];
  constructor() { }

  getAllRecipe(){
  return [...this.recipes];
  }

  getRecipeId(id){
    return {...this.recipes.find(ele=>{
    return ele.id == id;
  })
   }
  }

}
