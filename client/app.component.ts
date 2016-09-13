import { Component } from '@angular/core';

import { DemoComponent } from './imports/demo/demo.component';

import template from './app.component.html';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'app',
  template,
  directives: [DemoComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {

}