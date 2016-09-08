import { Component } from '@angular/core';

import { DemoComponent } from './imports/demo/demo.component';
import { Parties } from '../both/collections/parties.collection';

import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [DemoComponent]
})
export class AppComponent {
  parties: Mongo.Cursor<any>;

  constructor() {
    this.parties = Parties.find();
  }
}
