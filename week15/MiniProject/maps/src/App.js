import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

function App(props) {
  return (
    <>
      <Map google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 32.0853, lng: 34.7818 }}>
        <Marker position={{ lat: 32.0853, lng: 34.7818 }} />
        </Map>
    </>

    
  );
}
export default GoogleApiWrapper({
  apiKey: '' 
})(App);

