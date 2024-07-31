import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonLabel, IonCol, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, CommonModule, FormsModule]
})
export class IndexPage implements OnInit {

  constructor() { addIcons({ bagHandleOutline });
}

  ngOnInit() {
  }

}
