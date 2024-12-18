import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { TPlaceCard } from '../types/place-card';
import leaflet from 'leaflet';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, {city}: TPlaceCard): leaflet.Map | null {
  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapRef.current)
        .setView([city.location.latitude, city.location.longitude], city.location.zoom);

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city, mapRef]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map]);

  return map;
}
