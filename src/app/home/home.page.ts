import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonGrid, IonRow, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [  RouterLink, IonButton, IonRow, IonGrid, IonHeader, IonToolbar,
    IonTitle, IonContent, IonLabel, IonButtons, IonBackButton],
})
export class HomePage {
  constructor() {}
}
