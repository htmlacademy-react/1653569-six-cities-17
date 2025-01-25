import leaflet from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MapSetting, MapType } from '../utils/consts';
import { TLocation } from '../types/offer-card';
import { TTypeAs } from '../types/helper';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  { longitude, latitude, zoom }: TLocation,
  mapType: TTypeAs<typeof MapType>
): leaflet.Map | null {

  const [ map, setMap ] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const hasScroll = mapType === MapType.Main;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet
        .map(mapRef.current, {scrollWheelZoom: hasScroll})
        .setView([latitude, longitude], zoom);

      leaflet
        .tileLayer(MapSetting.Map, {attribution: MapSetting.Links})
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [hasScroll, latitude, longitude, mapRef, zoom]);

  useEffect(() => {
    if (map) {
      map.setView([latitude, longitude], zoom);
    }
  }, [latitude, longitude, zoom, map]);

  return map;
}
