import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})

export class PokemonListPage{
  nombrePokemon: string = '';
  constructor(private router: Router) {}

  buscarPokemon() {
    if (!this.nombrePokemon.trim()) return;

    this.router.navigate(['/tab1', this.nombrePokemon.toLowerCase()]);
  }
}