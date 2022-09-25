
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap,Popup } from 'react-leaflet';

import {iconPerson} from './Icon'

export function ChangeView({ coords }: { coords: { lat: number, lng: number } }) {
  const map = useMap();
  map.setView(coords, 12);

  return null;
}

export default function Map({ coords }: { coords: { lat: number, lng: number } }) {
  return (
    <MapContainer center={coords} zoom={13} style={{ height: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      

        <Marker position={[coords.lat, coords.lng]} icon={iconPerson}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      
      <ChangeView coords={coords} />
    </MapContainer>
  );
}
