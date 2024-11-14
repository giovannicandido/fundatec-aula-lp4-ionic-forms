import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar, ViewDidEnter } from '@ionic/angular/standalone';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent,
    CommonModule
  ]
})
export class Tab2Page implements OnInit, ViewDidEnter {
  pessoas: Pessoa[] = []
  constructor(private service: PessoaService) {}
  
  ionViewDidEnter(): void {
    this.pessoas = this.service.listAll()
    console.log("Ionic View Did Enter")
  }
  
  ngOnInit(): void {
    console.log("NG On Init")
  }

}
