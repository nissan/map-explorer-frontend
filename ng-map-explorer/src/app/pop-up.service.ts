import { Injectable } from '@angular/core';
import { taxiTripProperties } from './common/taxitripFeatures';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }
  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Capital: ${ data.capital }</div>` +
      `<div>State: ${ data.state }</div> `+
      `<div>Population: ${ data.population }</div>`;
  }
  makeTaxiTripStartPopup(data:taxiTripProperties): string {
    const date = new Date(data.pickupDateTime);
    return `` +
      `<div>Started: ${ date.toLocaleDateString()} at ${date.toLocaleTimeString()}</div>` +
      `<div>Trip Length: ${ data.tripDistance } miles</div>` +
      `<div>Passengers: ${ data.passengerCount }</div> `+
      `<div>Total cost: $${ data.totalAmount.toFixed(2) }</div>`;
  }
  makeTaxiTripEndPopup(data:taxiTripProperties): string {
    const date = new Date(data.dropOffDateTime);
    return `` +
      `<div>Ended: ${ date.toLocaleDateString()} at ${date.toLocaleTimeString()}</div>` +
      `<div>Trip Length: ${ data.tripDistance } miles</div>` +
      `<div>Passengers: ${ data.passengerCount }</div> `+
      `<div>Total cost: $${ data.totalAmount.toFixed(2) }</div>`;
  }
}
