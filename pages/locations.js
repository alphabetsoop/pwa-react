import React from "react";
import mapStyles from "../styles/mapStyles.js"; 
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
  lat: 43.653225,
  lng: -79.383186,
}; 

//Styling options for the map
const options =
{
  styles: mapStyles
}; 


const locations = () => {
  const {isLoaded, loadError} = useLoadScript(
    {
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    }
); 
// Exception Handling
if (loadError) return "Error loading maps"; 
if(!isLoaded) return "Loading Maps"; 
  return (
    <div>
      <Search />

      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={8} 
      center={center}
      options={options}
      >
      </GoogleMap>
    </div>
  )
}

export default locations

function Search() 
{
  const {ready, 
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestion
      } = usePlacesAutocomplete({
        requestOptions: {
          // Shows locations near the assigned lat and lng. Needs to 
          location: {lat: () => 43.653225, lng: () => -79.383186},
          // radius of default display for searches in kilometers 
          radius: 200 * 1000, // Default is in meters
    },
  });
//Search box 
//Combobox Popover will allow us to implement suggested searches
  return (
  <div className="search"> 
  <Combobox onSelect={(address) => {console.log(address)}}>
    <ComboboxInput value={value} onChange={(e) => {
      setValue(e.target.value);
    }}
    disabled={!ready}
    placeholder = "Enter an address"
    />
    <ComboboxPopover>
      {status === "OK" && data.map(({id, description}) => (<ComboboxOption key = {id} value={description} /> ))}
    </ComboboxPopover>
  </Combobox>
  </div> 
  );
}