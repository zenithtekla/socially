import { Component } from '@angular/core';

import { DemoComponent } from './imports/demo/demo.component';
import { Parties } from '../both/collections/parties.collection';
import { PartiesFormComponent } from './imports/parties/parties-form.component';

import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [DemoComponent, PartiesFormComponent]
})
export class AppComponent {
  parties: Mongo.Cursor<any>;

  constructor() {
    this.parties = Parties.find();
  }
}
