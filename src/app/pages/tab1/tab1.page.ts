import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {

  nombrePokemon: string = '';
  pokemon: any;
  loading = false;
  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nombrePokemon = params.get('name')!;
      this.obtenerPokemon();
    });
  }

  // Método para obtener el Pokémon por su nombre
  obtenerPokemon() {
    this.loading = true;

    this.pokemonService.getPokemonByName(this.nombrePokemon).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.pokemon = null;
        this.loading = false;
        alert('Pókemon no encontrado')
      }
    })
  }

  getColor(type: string) {
    const colors: any = {
      fire: 'danger',
      water: 'primary',
      grass: 'success',
      electric: 'warning',
      psychic: 'tertiary',
      ice: 'light',
      dragon: 'dark'
    };
    return colors[type] || 'medium';
  }

}
