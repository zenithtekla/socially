import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracker } from 'meteor/tracker';

import { Parties } from '../../../both/collections/parties.collection';

import template from './party-details.component.html';

@Component({
  selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit {
  partyId: string;
  party: any;

  constructor(private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {
    this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId;

        Tracker.autorun(() => {
          this.ngZone.run(() => {
            this.party = Parties.findOne(this.partyId);
          });
        });
      });
  }
}