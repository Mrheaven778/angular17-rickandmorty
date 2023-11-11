import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../interface/characters';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  @Input() character!: Result;
}
