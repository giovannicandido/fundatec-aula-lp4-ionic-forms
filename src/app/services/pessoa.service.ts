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

    edit(pessoa: Pessoa) {
        const pessoas = this.listAll()
        const index = pessoas.findIndex(p => p.email === pessoa.email);
        if(index >= 0) {
            pessoas[index] = pessoa
        } else {
            throw new Error(`Pessoa não existe com email ${pessoa.email}`)
        }

        const json = JSON.stringify(pessoas)
        localStorage.setItem(KEY, json)
    }

    findByEmail(email: string): Pessoa | null {
        const pessoas = this.listAll()
        const index = pessoas.findIndex(p => p.email === email);
        if(index >= 0) {
            return pessoas[index]
        } else {
            return null
        }
    }
}