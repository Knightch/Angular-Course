import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<Number>();
  @Output() intervalPrimeNumber = new EventEmitter<Number>();
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onPauseGame() {
    clearInterval(this.interval);
  }

  onPrimeNumber() {
    this.interval = setInterval(() => {
      this.intervalPrimeNumber.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
}
