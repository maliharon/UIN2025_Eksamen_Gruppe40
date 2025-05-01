import { useState } from 'react';
import Layout from "./component/Layout";
import { Routes, Route } from 'react-router-dom';


function App() {
  const [festivaler, setFestivaler] = useState();

  // En funksjon som henter spilldata fra en API
  const getFestivaler = async () => {
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=9ODnmhE238NznalEefKKa0oTfHnvc4Qn&keyword=Findings&locale=*") // Henter data fra API-et
      .then((response) => response.json()) // Konverterer svaret til JSON-format
      .then((data) => setFestivaler(data.data)) // Setter spillene i state-variabelen
      .catch((error) => console.error("Skjedde noe dritt ved fetch", error)); // Hvis noe går galt, vis en feilmelding
  };
  return (
    <>
   <Layout>
      
      <Routes>
      
      </Routes>
    </Layout>
    </>
  )
}

export default App
