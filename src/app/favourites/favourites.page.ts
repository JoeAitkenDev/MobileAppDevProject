import { Component, OnInit } from '@angular/core';

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
  ],
})
export class FavouritesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
