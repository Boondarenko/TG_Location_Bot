"use client";
import { useEffect, useState } from "react";

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    }

    fetchLocation();
  }, []);

  return (
    <>
      {location && (
        <div>
          <h2>Your Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>City: {location.city}</p>
        </div>
      )}
    </>
  );
};

export default Home;
