import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  public unit: string = 'metric';

  public ingredients: any = null;

  public instructions: any = null;

  public recipeID: number = 0;

  public favouritesList: number[] = [];
}
