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
  }

  async loadRecipeDetails(id: number) {
    await this.mds.getRecipeDetails(id);

    // Navigate to the recipe page
    this.router.navigate(['/recipe-details']);
  }
}
