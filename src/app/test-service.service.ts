import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private _testVariable: string = 'ma test variable';

  constructor() {

  }

  get testVariable(): string {
    return this._testVariable;
  }
}
