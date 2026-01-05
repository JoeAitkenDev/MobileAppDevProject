import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    CommonModule,
  ],
})
export class FavouritesPage implements OnInit {
  constructor(public mds: MyDataService, private router: Router) {}

  async ngOnInit() {
    await this.mds.getRecipes();
    await this.mds.loadSearchResults();
    await this.mds.loadFavouritesFromStorage();
  }

  async loadRecipeDetails(id: number) {
    await this.mds.getRecipeDetails(id);

    // Navigate to the recipe page
    this.router.navigate(['/recipe-details']);
  }

  // N.B THE BELOW METHOD WAS ADAPTED FROM ONLINE SOURCE -> https://www.geeksforgeeks.org/typescript/remove-duplicate-elements-from-typescript-array/
  // I was struggling with a duplicate problem and couldn't get around it.

  // Remove duplicates
  get favouriteRecipes() {
    // Adds all the recipes from both data sets to an array
    return [
      ...(this.mds.recipeData || []),
      ...(this.mds.searchBasedData || []),
    ].filter(
      // First occurance stays whilst following duplicates are removed
      (recipe, index, self) =>
        this.mds.favouritesList.includes(recipe.id) &&
        index === self.findIndex((r) => r.id === recipe.id)
    );
  }
}
