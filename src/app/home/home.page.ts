import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonSearchbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { cogSharp, heartSharp, searchSharp, trashBin } from 'ionicons/icons';

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
    IonCol,
    IonGrid,
    IonRow,
    IonSearchbar,
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      heartSharp,
      cogSharp,
      trashBin,
      searchSharp,
    });
  }
}
