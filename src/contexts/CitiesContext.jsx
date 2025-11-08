import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);

  useEffect(function () {
    async function fetchCities() {
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
