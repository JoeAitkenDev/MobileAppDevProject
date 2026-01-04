import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { cogSharp, heartSharp, searchSharp, trashBin } from 'ionicons/icons';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { CommonModule } from '@angular/common';
import { SharedData } from '../services/shared-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    RouterLink,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    CommonModule,
  ],
})
export class HomePage {
  recipeData: any;
  recipeIngredients: any;
  recipeInstructions: any;

  recipes: HttpOptions = {
    url: this.mhs.getRecipesURL,
  };

  details: HttpOptions = {
    url: this.mhs.getRecipesURL,
  };

  constructor(
    private mhs: MyHttpService,
    private router: Router,
    private sd: SharedData
  ) {
    addIcons({
      heartSharp,
      cogSharp,
      trashBin,
      searchSharp,
    });
  }

  ngOnInit() {
    this.recipeData = [];
    this.getRecipes();
  }

  async getRecipes() {
    let result = await this.mhs.get(this.recipes);
    this.recipeData = result.data.results;
    console.log(this.recipeData);
  }

  async getRecipeDetails(id: number) {
    this.details.url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${this.mhs.apiKey}`;
    let result = await this.mhs.get(this.details);

    this.recipeIngredients = result.data.extendedIngredients;
    this.recipeInstructions = result.data.analyzedInstructions[0].steps;

    // Add the ingredients and instructions to the shared data service
    this.sd.ingredients = this.recipeIngredients;
    this.sd.instructions = this.recipeInstructions;

    console.log(result);
    // console.log(this.recipeIngredients);

    // Navigate to the recipe page
    this.router.navigate(['/recipe-details']);
  }
}
