import React, { useState } from 'react';

const DMSInputForm = ({ onSubmit }) => {
  const [latitudeDegrees, setLatitudeDegrees] = useState('');
  const [latitudeMinutes, setLatitudeMinutes] = useState('');
  const [latitudeSeconds, setLatitudeSeconds] = useState('');
  const [longitudeDegrees, setLongitudeDegrees] = useState('');
  const [longitudeMinutes, setLongitudeMinutes] = useState('');
  const [longitudeSeconds, setLongitudeSeconds] = useState('');
  const [dd, setDd] = useState({ latDD: '', longDD: '' });

  // Function to convert DMS to DD
  const convertToDD = (degrees, minutes, seconds) => {
    const degreesNum = parseFloat(degrees);
    const minutesNum = parseFloat(minutes) / 60;
    const secondsNum = parseFloat(seconds) / 3600;
    return degreesNum + minutesNum + secondsNum;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform conversion from DMS to DD
    const latitudeDD = convertToDD(latitudeDegrees, latitudeMinutes, latitudeSeconds);
    const longitudeDD = convertToDD(longitudeDegrees, longitudeMinutes, longitudeSeconds);
    // Update state with converted values
    setDd({ latDD: latitudeDD.toFixed(6), longDD: longitudeDD.toFixed(6) });
    // Call the onSubmit prop with the converted values
    onSubmit({ latDD: latitudeDD, longDD: longitudeDD });
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Convert Coordinate DMS to DD</h2>
        <div className="mb-4">
          <label className="block">Latitude (DMS):</label>
          <div className="flex space-x-2">
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={latitudeDegrees}
              onChange={(e) => setLatitudeDegrees(e.target.value)}
              placeholder="Degrees"
            />
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={latitudeMinutes}
              onChange={(e) => setLatitudeMinutes(e.target.value)}
              placeholder="Minutes"
            />
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={latitudeSeconds}
              onChange={(e) => setLatitudeSeconds(e.target.value)}
              placeholder="Seconds"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Longitude (DMS):</label>
          <div className="flex space-x-2">
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={longitudeDegrees}
              onChange={(e) => setLongitudeDegrees(e.target.value)}
              placeholder="Degrees"
            />
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={longitudeMinutes}
              onChange={(e) => setLongitudeMinutes(e.target.value)}
              placeholder="Minutes"
            />
            <input
              className="flex-1 p-2 bg-gray-700 rounded"
              type="text"
              value={longitudeSeconds}
              onChange={(e) => setLongitudeSeconds(e.target.value)}
              placeholder="Seconds"
            />
          </div>
        </div>
        <button
          className="w-full py-2 bg-green-600 rounded hover:bg-green-700"
          type="submit"
        >
          Convert
        </button>
        <div className="mt-4">
          <label className="block">Converted Latitude (DD):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="text"
            value={dd.latDD}
            readOnly
          />
        </div>
        <div className="mt-2">
          <label className="block">Converted Longitude (DD):</label>
          <input
            className="w-full p-2 bg-gray-700 rounded"
            type="text"
            value={dd.longDD}
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

export default DMSInputForm;
