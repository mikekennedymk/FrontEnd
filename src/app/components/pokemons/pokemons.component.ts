import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemons.service';
import { PokemonListResult } from '../../models/PokemonListResult';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemonListResult: PokemonListResult | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons(); // Chama o método para obter todos os Pokémon
  }

  getAllPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(
      (data: PokemonListResult) => {
        this.pokemonListResult = data;
        console.log(this.pokemonListResult);
      },
      error => {
        console.error('Erro ao buscar Pokémon:', error);
      }
    );
  }
}