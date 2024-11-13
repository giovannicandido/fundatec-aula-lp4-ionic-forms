import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput, IonItem, IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonSelect, IonSelectOption, IonItem, IonInput, IonHeader, IonToolbar, 
    IonTitle, IonContent, ExploreContainerComponent,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class Tab1Page {

  msg = ""
  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.email],
      hoobie: ['']
    })
  }

  salvar() {
    if(this.formGroup.valid) {
      console.log("Salvando....")
      console.log(this.formGroup.value)
      this.formGroup.reset()
      this.msg = ""
    } else {
      console.error('Invalid')
      this.msg = "Erro de validação"
    }
    
  }
}
