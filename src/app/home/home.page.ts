import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
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
import { CommonModule } from '@angular/common';
import { MyHttpService } from '../services/my-http.service';

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
  // Control what data is displayed with this variable
  hasSearched: boolean = false;

  // Store the searchbar to a variable
  @ViewChild('searchbar') searchbar: any;

  constructor(
    private router: Router,
    public mds: MyDataService,
    private mhs: MyHttpService
  ) {
    addIcons({
      heartSharp,
      cogSharp,
      trashBin,
      searchSharp,
    });
  }

  ngOnInit() {
    this.mds.getRecipes();
  }

  async loadRecipeDetails(id: number) {
    await this.mds.getRecipeDetails(id);

    // Navigate to the recipe page
    this.router.navigate(['/recipe-details']);
  }

  async searchViaIngredients() {
    const input = this.searchbar.value;

    // Use the commas to split the ingredients, add them to an array, and trim unwated spacing
    const ingredients = input.split(',').map((i: string) => i.trim());

    // Call the API using the complex search option (See API docs)
    const results = await this.mhs.searchByIngredients(ingredients);
    this.mds.searchBasedData = results.data.results;

    await this.mds.saveSearchResults();

    // Toggle the hasSearched variable to alter the dynamic display on the home page
    this.hasSearched = true;
  }
}
