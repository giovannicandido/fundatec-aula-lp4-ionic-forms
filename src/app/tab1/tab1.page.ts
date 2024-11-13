import { Component } from '@angular/core';
import { IonHeader, IonToolbar, 
  IonTitle, IonContent, IonInput, IonItem, IonList,
  IonSelect,
  IonSelectOption, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonSelect, IonSelectOption, IonItem, IonInput, IonHeader, IonToolbar, 
    IonTitle, IonContent, ExploreContainerComponent,
    FormsModule,
    CommonModule
  ],
})
export class Tab1Page {

  pessoa: any = {}

  constructor() {}

  salvar() {
    console.log("Salvando....")
    console.log(this.pessoa)
  }
}
