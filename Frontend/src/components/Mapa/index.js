import React from 'react';
import { GoogleApiWrapper, Marker } from 'google-maps-react';

import { Container, Maps } from './styles';

function Mapa({ centro, zoom }) {
  return (
    <Container>
      <Maps
        google={window.google}
        zoom={zoom}
        initialCenter={centro}
        center={centro}
      >
        <Marker position={centro} />
      </Maps>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(Mapa);
