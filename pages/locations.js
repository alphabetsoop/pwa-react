import React, {useCallback, useState, useRef} from "react";
import mapStyles from "../styles/mapStyles.js"; 
import 'semantic-ui-css/semantic.min.css'; 
// Google Map libraries
import{
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindows,
} from "@react-google-maps/api";

//Places libraries used for search feature
import usePlacesAutocomplete,
{
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"; 
import
{
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

// Load Google API Library
const libraries = ["places"]
// Establishes size of the map
const mapContainerStyle =
{
  width: "100vw",
  height: "100vh"
};
// Used to set the default location the map displays
const center = {
  lat: 32.9858,
  lng: -96.7501,
}; 

//Styling options for the map
const options =
{
  styles: mapStyles
}; 


const locations = () => {
  const {isLoaded, loadError} = useLoadScript(
    {
        googleMapsApiKey: "AIzaSyAIqcwHMQa8bUBR3Z0uFoegzSgC5Gvgs8k",
        libraries,
    }
); 

const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) => {
  mapRef.current = map; 
}, []); 

// The map reference will only change if the dependencies change. In this case the lat and lng. 
const landOn = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14); 
  }, []); 


// Exception Handling
if (loadError) return "Error loading maps"; 
if(!isLoaded) return "Loading Maps"; 
  return (
    <div>
      <Search landOn={landOn} />
      <Locate landOn={landOn} />

      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={8} 
      center={center}
      options={options}
      onLoad = {onMapLoad}
      >
      </GoogleMap>
    </div>
  )
}

export default locations

// Locate will allow the users to click an icon and have the maps use their current location determined from the browser. 
function Locate ({landOn})
{
  return( <button onClick={() =>{
    navigator.geolocation.getCurrentPosition((position) => {
      landOn({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }); 
    }, () => null); 
  }}><i className="compass icon"/>
  </button> );
}

//goTo has been set up as a prop that can be passed into the Search function
function Search({landOn}) 
{
  const {ready, 
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestion
      } = usePlacesAutocomplete({
        requestOptions: {
          // Shows locations near the assigned lat and lng. 
          location: {lat: () => 32.9858, lng: () => -96.7501},
          // radius of default display for searches in kilometers 
          radius: 200 * 1000, // Default is in meters
    },
  });



//Search box 
//Combobox Popover will allow us to implement suggested searches
  return (
  <div className="search"> 
  <Combobox onSelect={async (address) => {
    try {
      const results = await getGeocode({address});
      // Returns the lat and lng from the JSON object aquired from the above function
      const {lat, lng} = await getLatLng(results[0]);  
      landOn({lat, lng}); 
    } catch(error)
    {
      console.log("error"); 
    }
    //console.log(address)
    }}>
    <ComboboxInput value={value} onChange={(e) => {
      setValue(e.target.value);
    }}
    disabled={!ready}
    placeholder = "Enter an address"
    />
    <ComboboxPopover>
      <ComboboxList>
      {status === "OK" && data.map(({id, description}) => (<ComboboxOption key = {id} value={description} /> ))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  </div> 
  );
}