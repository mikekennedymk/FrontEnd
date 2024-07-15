import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResult } from '../models/PokemonListResult'; // Certifique-se de ajustar conforme necessário
import { PokemonDetail } from '../models/PokemonDetail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://localhost:7262/api/Pokemons'; // Ajuste conforme necessário

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<PokemonListResult> {
    return this.http.get<PokemonListResult>(this.apiUrl);
  }

  getPokemonDetails(name: string): Observable<PokemonDetail> {
    const apiUrl = `${this.apiUrl}/PokemonByName/${name}`;
    return this.http.get<PokemonDetail>(apiUrl);
  }
}