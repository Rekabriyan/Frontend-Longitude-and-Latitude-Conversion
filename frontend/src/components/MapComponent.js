// src/MapComponent.jsx
import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/map'; // Import Map
import View from 'ol/view'; // Import View
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';

const MapComponent = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    // Inisialisasi peta hanya sekali ketika komponen dimount
    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Set lebar dan tinggi peta sesuai dengan lebar dan tinggi layar
    const resizeMap = () => {
      map.updateSize();
    };

    window.addEventListener('resize', resizeMap);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeMap);
      map.setTarget(null); // Cleanup on unmount
    };
  }, []);

  return <div ref={mapElement} style={{ width: '100%', height: '100vh' }}></div>;
};

export default MapComponent;
