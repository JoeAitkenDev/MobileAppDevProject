import { Component, OnInit } from '@angular/core';

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonIcon,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
  ],
})
export class FavouritesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
