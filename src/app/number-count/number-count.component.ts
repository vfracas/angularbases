import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-count',
  templateUrl: './number-count.component.html',
  styleUrls: ['./number-count.component.scss']
})
export class NumberCountComponent implements OnInit {

  nb: number = 53841596248;
  totalEssaie: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getRandomNumber() {
    this.totalEssaie++;
    return Math.floor(Math.random() * (10 - 1) + 1);
  }

  getTotalTry() {
    this.totalEssaie = 0;
    let nbSp = this.nb.toString();
    let arrayNumberString = nbSp.split("");
    let realDigits = arrayNumberString.map(Number);

    let randomNb = this.getRandomNumber();

    realDigits.forEach((currentNumber) => {
      while (currentNumber !== randomNb) {
        randomNb = this.getRandomNumber();
      }
    })
  }

}
