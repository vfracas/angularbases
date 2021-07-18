import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-plus-moins',
  templateUrl: './array-plus-moins.component.html',
  styleUrls: ['./array-plus-moins.component.scss']
})
export class ArrayPlusMoinsComponent implements OnInit {

  strArray: string[] = ['livre', 'CD', 'Console'];

  constructor() { }

  ngOnInit(): void {
  }

  concatMyArray(): void {
    this.strArray.push('Bonjour Monsieur');
  }

  spliceMyArray(): void {
    this.strArray.splice(-1, 1);
  }

}
