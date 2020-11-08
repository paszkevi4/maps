import logo from './logo.svg';
import './App.css';

import GMap from './components/Map'

const key = 'AIzaSyDYGcZiSS2eYNPu96iRbLg7w1H2jvYQr4M'

function App() {
  return (
    <div style={{ height: `100vh`, width: `100vw`}}>
      <GMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
    
  );
}

export default App;
