import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];
  public deletedHero?: string;

  removeHero(): void {
    this.deletedHero = this.heroesNames.pop();
  }
  addHero(): void {
    this.heroesNames.push(this.deletedHero || '');
  }
}
