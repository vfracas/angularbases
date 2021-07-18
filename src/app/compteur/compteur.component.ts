import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  toModify: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incrementNb(incrementNb: number): void {
    this.toModify += incrementNb;
  }

  decrementNb(decrementNb: number):void {
    this.toModify -= decrementNb;
  }
}
