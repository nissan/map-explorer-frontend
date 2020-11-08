import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';
import { lineStringTaxiTripFeatureCollection, taxiTripProperties } from './common/taxitripFeatures';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  //reference data at https://tonypapousek.carto.com/tables/us_capitals/public
  capitals: string = '/assets/data/usa-capitals.geojson';

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  constructor(private http: HttpClient, private popUpService: PopUpService) {}
  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      const maxVal = Math.max(
        ...res.features.map((x) => parseInt(x.properties.population)),
        0
      );
      console.log(maxVal);
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];

        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.ScaledRadius(c.properties.population, maxVal),
        });
        circle.bindPopup(this.popUpService.makeCapitalPopup(c.properties));
        circle.addTo(map);
      }
    });
  }

  makeTaxiCircleMarkers(map: L.Map): void {
    this.http.get("taxi-trip/geojson?limit=100").subscribe((res: lineStringTaxiTripFeatureCollection) => {
      console.log(res);
      for (const c of res.features) {
        const tripStartLat = c.geometry.coordinates[0][0];
        const tripStartLon = c.geometry.coordinates[0][1];
        const tripEndLat = c.geometry.coordinates[1][0];
        const tripEndLon = c.geometry.coordinates[1][1];

        const circle1 = L.circleMarker([tripStartLon, tripStartLat], {
          radius: 10,
          color:'#0000FF'
        });
        circle1.bindPopup(this.popUpService.makeTaxiTripStartPopup(c.properties));
        circle1.addTo(map);
        const circle2 = L.circleMarker([tripEndLon, tripEndLat], {
          radius: 10,
          color: '#FF0000'
        });
        circle2.bindPopup(this.popUpService.makeTaxiTripEndPopup(c.properties));
        circle2.addTo(map);
      }
    });
  }
}
