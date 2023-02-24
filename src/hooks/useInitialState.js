import { useState, useEffect } from 'react';
import axios from "axios";

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState([]);
  console.log(videos)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  },
  []);

//   const fetchPokemon = async () => {
  
//   const peticion = await axios.get(`https://dummyjson.com/products`)
//   // setPokemon(peticion.data.forms[0])
//   // setVideos(peticion.data)


// }

// useEffect(() => {

// fetchPokemon()
// },[])
  
  return videos;

};



export default useInitialState;
