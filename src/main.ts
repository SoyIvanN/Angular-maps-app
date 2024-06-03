import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic295aXZhbm4iLCJhIjoiY2x3cTllbHR4MDAyNDJtc2RmamFvamgxOSJ9.IiYxo2s5Vh0CW-TrROAn4A';

if( !navigator.geolocation) {
  alert('Navigator does not support Geolocation');
  throw new Error('Navigator does not support Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
