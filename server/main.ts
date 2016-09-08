/*
import { Main } from './imports/server-main/main';

let mainInstance = new Main();
mainInstance.start();
*/

import { Main } from './imports/server-main/main';
import {loadParties} from './imports/fixtures/parties';
import {Meteor} from 'meteor/meteor';

let mainInstance = new Main();
mainInstance.start();
Meteor.startup(() => {
  // load initial Parties
  loadParties();
});

