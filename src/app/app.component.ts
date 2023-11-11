import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Result } from './interface/characters';
import { CharactersComponent } from './lib/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CharactersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page: number = 1;
  characters!: Result[];
  loadCharacters = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${this.page}`
    );
    const data = await res.json();
    this.characters = data.results;
  };
  ngOnInit() {
    this.loadCharacters();
  }
  nextPage() {
    if (this.page >= 42) {
      this.page = 42;
    } else {
      this.page++;
    }
    this.loadCharacters();
    console.log(this.page);
  }
  previousPage() {
    this.page--;
    if (this.page === 0) {
      this.page = 1;
    }
    this.loadCharacters();
  }
}
