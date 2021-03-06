import React from 'react'
import { GoogleMap, useJsApiLoader, DirectionsService,DirectionsRenderer } from '@react-google-maps/api';
import styles from './index.css';


const containerStyle = {
    width: '100%',
    height: '100%'
};


function MyComponent(props) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAQ5KNjrj74hz6dkrVn24Ho_tjcrQCUECU"
    })



    const center = props.startPoint ? {
        lat: Number(props.startPoint.lat),
        lng: Number(props.startPoint.lon)
    } : null;

    console.log(props.startPoint)

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        console.log(props)
        props.getMapStatus('test')
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >

            {
                !props.directions && props.markers()
            }
             {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>



    ) : null
}

export default React.memo(MyComponent)