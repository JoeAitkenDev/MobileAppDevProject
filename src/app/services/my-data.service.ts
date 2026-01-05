import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  // This stores the recipes object so it can be used on both the home page and the favourites page
  public recipeData: any;

  // These variables help manage the logic throughout various pages
  public unit: string = 'metric';
  public ingredients: any = null;
  public instructions: any = null;
  public recipeID: number = 0;

  // Array to store the IDs of favourited recipes
  public favouritesList: number[] = [];

  constructor(private storage: Storage, private mhs: MyHttpService) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.recipeData = [];
    await this.loadFavouritesFromStorage(); // Load the favourites from persistant storage
  }

  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  // Extracts the data from the recipes API call
  async getRecipes() {
    const result = await this.mhs.searchRecipes();
    this.recipeData = result.data.results;
    console.log(this.recipeData);
  }

  // Separately extracts the ingredients and the instructions from the recipe details API call
  async getRecipeDetails(id: number) {
    const result = await this.mhs.getRecipeDetails(id);

    const ingredients = result.data.extendedIngredients;
    const instructions = result.data.analyzedInstructions[0].steps;

    this.recipeID = id;
    this.ingredients = ingredients;
    this.instructions = instructions;

    console.log(ingredients);
  }

  async saveFavouritesToStorage() {
    await this.storage.set('favourites', this.favouritesList);
  }

  async checkFavouritesList(id: number) {
    const favourites = await this.storage.get('favourites');

    return favourites.includes(id); // Return true or false
  }

  // This is required to load the stored favourites to local memory - Supports the favourites card creation in-template logic
  async loadFavouritesFromStorage() {
    const stored = await this.get('favourites');
    this.favouritesList = stored || [];
  }
}
