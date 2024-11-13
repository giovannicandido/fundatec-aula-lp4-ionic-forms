import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa";

const KEY = "pessoas"

@Injectable({providedIn: 'root'})
export class PessoaService {
    
    save(pessoa: Pessoa) {
        const pessoas = this.listAll()
        pessoas.push(pessoa)
        const json = JSON.stringify(pessoas)
        localStorage.setItem(KEY, json)
    }

    listAll(): Pessoa[] {
        let json = localStorage.getItem(KEY)
        json = json === null ? "[]" : json
        const pessoas = JSON.parse(json);
        return pessoas;
    }
}