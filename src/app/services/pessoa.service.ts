import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa";

const KEY = "pessoas"

@Injectable({providedIn: 'root'})
export class PessoaService {
    
    save(pessoa: Pessoa) {
        const pessoas = this.listAll()
        pessoas.push(pessoa)
        this.saveList(pessoas)
    }

    listAll(): Pessoa[] {
        let json = localStorage.getItem(KEY)
        json = json === null ? "[]" : json
        const pessoas = JSON.parse(json);
        return pessoas;
    }

    edit(pessoa: Pessoa, email: string) {
        const pessoas = this.listAll()
        const index = this.findIndexByEmail(email)
        if(index >= 0) {
            pessoa.email = email
            pessoas[index] = pessoa
            this.saveList(pessoas)
        } else {
            throw new Error(`Pessoa não existe com email ${pessoa.email}`)
        }
    }

    findByEmail(email: string): Pessoa | null {
        const pessoas = this.listAll()
        const index = this.findIndexByEmail(email)
        if(index >= 0) {
            return pessoas[index]
        } else {
            return null
        }
    }

    deleteByEmail(email: string) {
        const index = this.findIndexByEmail(email)
        const pessoas = this.listAll()
        if(index >= 0) {
            pessoas.splice(index, 1)
            this.saveList(pessoas)
        }

    }

    private saveList(pessoas: Pessoa[]) {
        const json = JSON.stringify(pessoas)
        localStorage.setItem(KEY, json)
    }

    private findIndexByEmail(email: string) {
        const pessoas = this.listAll()
        return pessoas.findIndex(p => p.email === email);
    }
}