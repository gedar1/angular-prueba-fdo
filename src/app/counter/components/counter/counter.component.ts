import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  public counter: number = 10;
  public increment = (value: number): void => {
    this.counter += value;
  };
  public decrement = (value: number): void => {
    this.counter -= value;
  };
  public reset = (): void => {
    this.counter = 0;
  };
}
