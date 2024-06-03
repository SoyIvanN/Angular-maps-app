import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  public selectedId: string = '';

  private placesService = inject( PlacesService )
  private mapService = inject( MapService )

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places() {
    return this.placesService.places;
  }

  flyTo( place: Feature) {
    this.selectedId = place.id
    const [ lng, lat ]=[ place.properties.coordinates.longitude, place.properties.coordinates.latitude ];
    this.mapService.flyTo([ lng, lat ])
  }

  getDirections(place: Feature) {
    if( !this.placesService.userLocation ) throw Error('No hay userLocation')
      this.placesService.deletePlaces();
    const start = this.placesService.userLocation;
    const end: [number , number] = [ place.properties.coordinates.longitude, place.properties.coordinates.latitude ];
    this.mapService.getRouteBetweenPoints(start, end);
  }

}
