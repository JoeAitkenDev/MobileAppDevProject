import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  // Store the API key to a variable
  public apiKey = '70759a4f7911402abcc53d3c51d3b759';

  // Append the apikey to the url to grant access for get requests
  public getRecipesURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}`;

  constructor() {}

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }
}
