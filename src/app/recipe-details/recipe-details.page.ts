import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { heartSharp } from 'ionicons/icons';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonIcon,
    IonLabel,
    IonList,
  ],
})
export class RecipeDetailsPage implements OnInit {
  isFavourite: boolean = false;

  // Allow data to be imported from the my-data service
  constructor(public mds: MyDataService) {
    addIcons({
      heartSharp,
    });
  }

  async ngOnInit() {
    // Check to see if the recipe ID is saved to the favourites list in storage -> updated isFavourite variable accordingly
    this.isFavourite = await this.mds.checkFavouritesList(this.mds.recipeID);
  }

  async toggleFavourite() {
    this.isFavourite = await this.mds.checkFavouritesList(this.mds.recipeID);
  }

  // Add the recipe id to the favourites array
  async addToFavourites(id: number) {
    this.mds.favouritesList.push(id);
    await this.mds.saveFavouritesToStorage();
    await this.toggleFavourite();
  }

  // Remove the recipe id from the favourites array
  async removeFromFavourites(id: number) {
    this.mds.favouritesList = this.mds.favouritesList.filter(
      (recipe) => recipe !== id
    ); // Keep 'recipe' WHERE recipe != id

    await this.mds.saveFavouritesToStorage();
    await this.toggleFavourite();
  }
}
