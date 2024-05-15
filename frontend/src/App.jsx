import React from 'react';
import MapComponent from './components/Map/Map';
import Header from './components/Header/Header'
import Button from './components/Button/FloatingButton';

const App = () => {
  return (
    <div>
      <Header/>
      <MapComponent />
      <Button/>
    </div>
  );
};

export default App;
