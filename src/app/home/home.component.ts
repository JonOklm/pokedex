import { Component, OnInit } from '@angular/core';
import { LISTDEPOKEMONS } from '../bdd/pokemons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listDePokemon = LISTDEPOKEMONS
  constructor() {}

  ngOnInit(): void {
  }

filterPokemon(value:string){
  //ont rafraichit la liste de pokemon
  this.listDePokemon = LISTDEPOKEMONS
  // ont filtrer la liste
  this.listDePokemon = this.listDePokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(value.toLowerCase())
  })
}






}
