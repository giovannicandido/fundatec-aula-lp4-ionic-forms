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
  IonToolbar,
  ViewDidEnter
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute } from '@angular/router';

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
export class Tab1Page implements ViewDidEnter {
  editEmail: string | null = null

  msg = ""
  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private pessoaService: PessoaService,
    private activedRouter: ActivatedRoute
  ) {
    this.formGroup = formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.email],
      hoobie: ['']
    })
  }

  ionViewDidEnter(): void {
    this.editEmail = this.activedRouter.snapshot.paramMap.get("email")
    this.load()
  }

  load() {
    if(this.editEmail) {
      const pessoa = this.pessoaService.findByEmail(this.editEmail)
      if(pessoa) {
        this.formGroup.setValue(pessoa)
        this.formGroup.controls["email"].disable()
      }
    }
  }

  salvar() {
    if(this.formGroup.valid) {
      console.log("Salvando....")
      console.log(this.formGroup.value)
      if(this.editEmail) {
        this.pessoaService.edit(this.formGroup.value, this.editEmail)
      } else {
        this.pessoaService.save(this.formGroup.value)
      }
      this.formGroup.reset()
      this.msg = ""
    } else {
      console.error('Invalid')
      this.msg = "Erro de validação"
    }
    
  }
}
