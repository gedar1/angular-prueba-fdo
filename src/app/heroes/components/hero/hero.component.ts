import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 45;
  public capitalized: string = 'Peter Parker';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `This is a description of ${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = ' Ironman';
  }

  changeAge(): void {
    this.age = 30;
  }
  resetForm(): void {
    this.name = 'spiderman';
    this.age = 45;
  }
}
