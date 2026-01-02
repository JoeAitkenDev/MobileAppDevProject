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
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
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
export class SettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
