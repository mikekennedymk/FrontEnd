import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemons.service';
import { PokemonDetail } from '../../models/PokemonDetail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetail: PokemonDetail | null = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemonDetails(name).subscribe(
        (data: PokemonDetail) => {
          this.pokemonDetail = data;
        },
        error => {
          console.error('Error fetching Pokémon details:', error);
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']); // Remova ':' antes de 'name'
  }
}