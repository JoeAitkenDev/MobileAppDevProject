import { Component } from '@angular/core';
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
  constructor(private router: Router, public mds: MyDataService) {
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
}
