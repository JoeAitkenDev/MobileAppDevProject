import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  public unit: string = 'metric';
  public ingredients: any = null;
  public instructions: any = null;
  public recipeID: number = 0;

  // Array to store the IDs of favourited recipes
  public favouritesList: number[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async saveFavouritesToStorage() {
    await this.storage.set('favourites', this.favouritesList);
  }

  async checkFavouritesList(id: number) {
    const favourites = await this.storage.get('favourites');

    return favourites.includes(this.recipeID); // Return true or false
  }
}
