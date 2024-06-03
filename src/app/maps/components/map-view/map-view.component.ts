import { Component, AfterViewInit, inject, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('map')
  mapDivElement!: ElementRef;

  private placesService = inject( PlacesService );
  private mapService = inject( MapService )

  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error ('No hay placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.userLocation,
      zoom: 14,
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({ color : 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap(map)

  }


}
