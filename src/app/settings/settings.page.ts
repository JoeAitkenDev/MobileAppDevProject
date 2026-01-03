import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { FormsModule } from '@angular/forms';

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
  IonRadio,
  IonRadioGroup,
  IonItem,
} from '@ionic/angular/standalone';
import { isNullishCoalesce } from 'typescript';

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
    IonRadio,
    IonRadioGroup,
    FormsModule,
    IonItem,
  ],
})
export class SettingsPage implements OnInit {
  // As the default selection is metric, add that to storage initially when the component loads
  unit: string = 'metric';

  constructor(private mds: MyDataService) {}

  // Load the saved selection upon component launch, if there is one
  async ngOnInit() {
    await this.getRadioSelection();
  }

  // Insurance: Retrieves again when the page is visible
  async ionViewWillEnter() {
    await this.getRadioSelection();
  }

  async getRadioSelection() {
    const storedUnit = await this.mds.get('unit');

    if (storedUnit !== null) {
      this.unit = storedUnit;
    }
  }

  // This is the event method for radio selection
  selectRadio(event: any) {
    this.unit = event.detail.value; // Update the unit variable with the new selection
    this.mds.set('unit', this.unit);
  }
}
