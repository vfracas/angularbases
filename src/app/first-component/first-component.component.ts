import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  myString: string = 'hepzsoupzofu';
  tiroir: string[] = ['couteau', 'fourchette', 'cuillère'];

  testService = new TestServiceService();

  constructor() { }

  ngOnInit(): void {
  }

  changeMyString(newString: string): void {
    this.myString = newString;
  }

}
