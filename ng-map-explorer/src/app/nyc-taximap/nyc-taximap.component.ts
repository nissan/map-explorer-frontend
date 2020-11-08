import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import { ShapeService } from '../shape.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-nyc-taximap',
  templateUrl: './nyc-taximap.component.html',
  styleUrls: ['./nyc-taximap.component.scss'],
})
export class NycTaximapComponent implements OnInit {
  private map;
  private states;
  constructor(
    private markerService: MarkerService,
    private shapeService: ShapeService
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeTaxiCircleMarkers(this.map);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [40.5,-74], //used random row from data to set to NY note lat/long is format
      zoom: 9,
    });
  }

}
// reference https://www.digitalocean.com/community/tutorials?q=building+maps+in+angular+using+leaflet
