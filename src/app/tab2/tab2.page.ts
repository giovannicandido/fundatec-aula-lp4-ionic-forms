import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar, ViewDidEnter, IonButton } from '@ionic/angular/standalone';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent,
    RouterModule,
    CommonModule
  ]
})
export class Tab2Page implements OnInit, ViewDidEnter {

  pessoas: Pessoa[] = []
  constructor(private service: PessoaService) { }

  ionViewDidEnter(): void {
    console.log("Ionic View Did Enter")
    this.load()
  }

  ngOnInit(): void {
    console.log("NG On Init")
  }

  deletar(email: string) {
    this.service.deleteByEmail(email)
    this.load()
  }

  load() {
    this.pessoas = this.service.listAll()
  }

}
