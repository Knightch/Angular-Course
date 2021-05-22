import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: Number[] = [];
  oddNumbers: Number[] = [];
  primeNumbers: Number[] = [];


  onIntervalFired(Firednumber: number) {
    if (Firednumber % 2 === 0) {
      this.evenNumbers.push(Firednumber);
    } else {
      this.oddNumbers.push(Firednumber);
    }
  }
  onIntervalPrimeNumber(i: number) {
    for (i % i === 0; i < 0;i--){
      this.primeNumbers.push(i);
    }
  }
}



