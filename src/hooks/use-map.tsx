import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MapSetting } from '../utils/consts';
import { TPlaceCard } from '../types/place-card';
import leaflet from 'leaflet';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, { city }: TPlaceCard): leaflet.Map | null {
  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapRef.current)
        .setView([city.location.latitude, city.location.longitude], city.location.zoom);

      leaflet
        .tileLayer(MapSetting.Map, {attribution: MapSetting.Links})
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
