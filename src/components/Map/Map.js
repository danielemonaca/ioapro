import React, {Component} from 'react';
import {GoogleMap, LoadScript, InfoWindow, Marker} from '@react-google-maps/api';

export default class Map extends Component {


    containerStyle = {
        width: '100%',
        height: '500px'
    };

    romePosition = {
        lat: 41.902782,
        lng: 12.496366
    };


    constructor(props) {
        super(props);
        //  this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            previousScans: [],
            currentIndex: -1
        };
    }

    render() {
        //const { previousScans, currentIndex } = this.state;
        return (
            <div>
                <LoadScript
                    googleMapsApiKey="AIzaSyCrhko7oOe2TB9_COTXZckSoqhpHWEJfLI"
                >
                    <GoogleMap
                        mapContainerStyle={this.containerStyle}
                        center={this.romePosition}
                        zoom={6}
                        options={{streetViewControl: false}}
                    >
                        {/*previousScans &&
                        previousScans.map((previousScan, index) => (
                            <Marker
                                position={{ lat: previousScan.latitude, lng: previousScan.longitude }}

                            >
                            </Marker>
                        )) */}

                    </GoogleMap>
                </LoadScript>
            </div>
        );
    }
}
