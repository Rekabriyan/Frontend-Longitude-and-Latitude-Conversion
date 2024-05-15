import React, { useState } from 'react';

const DDInputForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState(90.000000);
  const [longitude, setLongitude] = useState(33.230000);
  const [dms, setDms] = useState({ latDMS: '', longDMS: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Konversi dari DD ke DMS
    const convertToDMS = (dd) => {
      const degrees = Math.floor(dd);
      const minutes = Math.floor((dd - degrees) * 60);
      const seconds = ((dd - degrees - minutes / 60) * 3600).toFixed(2);
      return `${degrees}° ${minutes}' ${seconds}"`;
    };

    const latitudeDMS = convertToDMS(latitude);
    const longitudeDMS = convertToDMS(longitude);
    onSubmit({ latitudeDMS, longitudeDMS });
    setDms({ latDMS: latitudeDMS, longDMS: longitudeDMS });
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Convert Coordinate DD to DMS</h2>
        <div className="mb-4">
          <label className="block">Latitude (DD):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Decimal Degrees"
          />
        </div>
        <div className="mb-4">
          <label className="block">Longitude (DD):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Decimal Degrees"
          />
        </div>
        <button
          className="w-full py-2 bg-green-600 rounded hover:bg-green-700"
          type="submit"
        >
          Convert
        </button>
        <div className="mt-4">
          <label className="block">Converted Latitude (DMS):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="text"
            value={dms.latDMS}
            readOnly
          />
        </div>
        <div className="mt-2">
          <label className="block">Converted Longitude (DMS):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="text"
            value={dms.longDMS}
            readOnly
          />
        </div>
        <button
          className="w-full py-2 mt-4 bg-green-600 rounded hover:bg-green-700"
          type="button"
          onClick={() => console.log('Add to maps functionality to be implemented')}
        >
          Add To Maps
        </button>
      </form>
    </div>
  );
};

export default DDInputForm;
