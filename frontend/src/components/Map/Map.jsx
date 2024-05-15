import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';

const MapComponent = () => {
  const mapElement = useRef(null);

  useEffect(() => {
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

    const resizeMap = () => {
      map.updateSize();
    };

    window.addEventListener('resize', resizeMap);

    return () => {
      window.removeEventListener('resize', resizeMap);
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      
      ref={mapElement}
      className="border-2 border-gray-200 shadow-lg mx-auto my-2 p-2"
      style={{ width: 'calc(100% - 4rem)', height: 'calc(100vh - 5rem)' }}
    ></div>
  );
};

export default MapComponent;
