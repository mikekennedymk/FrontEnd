import { PokemonDetail } from './PokemonDetail'; // Certifique-se de ajustar conforme necessário

export interface PokemonListResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
  details?: PokemonDetail; // Opcional, dependendo de como você planeja usá-lo
}

export interface PokemonResult {
  name: string;
  url: string;
  details?: PokemonDetail; // Opcional, dependendo de como você planeja usá-lo
}