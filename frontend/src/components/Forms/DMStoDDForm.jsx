import React, { useState } from 'react';

const DMSInputForm = ({ onSubmit }) => {
  const [latitudeDegree, setLatitudeDegree] = useState('');
  const [latitudeMinute, setLatitudeMinute] = useState('');
  const [latitudeSecond, setLatitudeSecond] = useState('');
  const [longitudeDegree, setLongitudeDegree] = useState('');
  const [longitudeMinute, setLongitudeMinute] = useState('');
  const [longitudeSecond, setLongitudeSecond] = useState('');
  const [dd, setDd] = useState({ lat: 90.000000, long: 33.230000 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const latitude =
      parseFloat(latitudeDegree) +
      parseFloat(latitudeMinute) / 60 +
      parseFloat(latitudeSecond) / 3600;
    const longitude =
      parseFloat(longitudeDegree) +
      parseFloat(longitudeMinute) / 60 +
      parseFloat(longitudeSecond) / 3600;
    onSubmit({ latitude, longitude });
    setDd({ lat: latitude.toFixed(6), long: longitude.toFixed(6) });
  };

  return (
    <div className="p-4 bg-white-900 text-black rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold text-white-500 mb-4">Convert Coordinate DMS to DD</h2>
        <div className="mb-4">
          <label className="block">Latitude:</label>
          <div className="flex space-x-2">
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={latitudeDegree}
              onChange={(e) => setLatitudeDegree(e.target.value)}
              placeholder="Degrees"
            />
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={latitudeMinute}
              onChange={(e) => setLatitudeMinute(e.target.value)}
              placeholder="Minutes"
            />
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={latitudeSecond}
              onChange={(e) => setLatitudeSecond(e.target.value)}
              placeholder="Seconds"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Longitude:</label>
          <div className="flex space-x-2">
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={longitudeDegree}
              onChange={(e) => setLongitudeDegree(e.target.value)}
              placeholder="Degrees"
            />
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={longitudeMinute}
              onChange={(e) => setLongitudeMinute(e.target.value)}
              placeholder="Minutes"
            />
            <input
              className="flex-1 p-2 bg-white-700 rounded"
              type="number"
              value={longitudeSecond}
              onChange={(e) => setLongitudeSecond(e.target.value)}
              placeholder="Seconds"
            />
          </div>
        </div>
        <button
          className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
          type="submit"
        >
          Convert
        </button>
        <div className="mt-4">
          <label className="block">Converted Latitude:</label>
          <input
            className="w-full p-2 bg-white-700 rounded"
            type="text"
            value={`${dd.lat} deg`}
            readOnly
          />
        </div>
        <div className="mt-2">
          <label className="block">Converted Longitude:</label>
          <input
            className="w-full p-2 bg-white-700 rounded"
            type="text"
            value={`${dd.long} deg`}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default DMSInputForm;
