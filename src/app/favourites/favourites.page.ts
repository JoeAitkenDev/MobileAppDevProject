import { Component, OnInit } from '@angular/core';

import {
  IonBackButton,
  IonButtons,
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
    IonButtons,
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
