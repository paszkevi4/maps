import {GoogleMap, Marker, withScriptjs, withGoogleMap} from 'react-google-maps'

const GMap = ( ) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 50, lng: 30}}>
            <Marker position={{lat: 50, lng: 30}} />
            <Marker position={{lat: 50.1, lng: 30.1}} />
        </GoogleMap>
    )
}

export default withScriptjs(withGoogleMap(GMap))

