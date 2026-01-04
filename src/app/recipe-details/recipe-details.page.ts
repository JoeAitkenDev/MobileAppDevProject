import { Component, OnInit } from '@angular/core';
import { SharedData } from '../services/shared-data';
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
  // Allow data to be imported from the SharedData service
  constructor(public sd: SharedData) {
    addIcons({
      heartSharp,
    });
  }

  ngOnInit() {}

  // Add the recipe id to the favourites array
  addToFavourites(id: number) {
    this.sd.favouritesList.push(id);
    console.log(this.sd.favouritesList);
  }

  // Remove the recipe id from the favourites array
  removeFromFavourites(id: number) {
    this.sd.favouritesList = this.sd.favouritesList.filter(
      (recipe) => recipe !== id
    ); // Keep 'recipe' WHERE recipe != id
    console.log(this.sd.favouritesList);
  }
}
