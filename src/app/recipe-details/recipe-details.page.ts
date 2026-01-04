import { Component, OnInit } from '@angular/core';
import { SharedData } from '../services/shared-data';
import { CommonModule } from '@angular/common';
import {
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  ],
})
export class RecipeDetailsPage implements OnInit {
  // Allow data to be imported from the SharedData service
  constructor(public sd: SharedData) {}

  ngOnInit() {}
}
