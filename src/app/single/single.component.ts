import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LISTDEPOKEMONS } from '../bdd/pokemons';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  listDePokemon = LISTDEPOKEMONS;
  pokemon:Pokemon = new Pokemon();
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let urlId = this.route.snapshot.params['id'];
    for(let i = 0; i < this.listDePokemon.length; i++){
      if(this.listDePokemon[i].id == urlId){
        this.pokemon = this.listDePokemon[i];
      }
    }
  }

}
