import React from "react";

import{
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindows,
} from "@react-google-maps/api";

// Load Google API Library
const libraries = ["places"]

const map = (props) => {
        const {isLoaded, loadError} = useLoadScript(
            {
                googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                libraries,
            }
        ); 

        return <div>map</div>
    
} 

export default map; 