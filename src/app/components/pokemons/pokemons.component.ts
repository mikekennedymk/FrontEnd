import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemons.service';
import { PokemonListResult } from '../../models/PokemonListResult';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemonListResult: PokemonListResult | null = null;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPokemons(); 
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

  viewPokemonDetail(name: string): void {
    this.router.navigate(['/pokemons/pokemon-details', name]); // Remova ':' antes de 'name'
  }

}