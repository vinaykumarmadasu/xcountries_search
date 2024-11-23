import React, { useState, useEffect } from "react";

const Card = ({ name, flag }) => {
  return (
    <div className="countryCard" style={cardStyle}>
      <img src={flag} alt={`Flag of ${name}`} style={imageStyle} />
      <h2>{name}</h2>
    </div>
  );
};

const Countries = () => {
  const API_ENDPOINT = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) =>
        setCountries(
          data.map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
          }))
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter countries based on the search query
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [search, countries]);

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchBarStyle}
      />
      <div style={gridStyle}>
        {filteredCountries.map((country, index) => (
          <Card key={index} name={country.name} flag={country.flag} />
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "20px",
};

const searchBarStyle = {
  padding: "10px",
  marginBottom: "20px",
  width: "50%",
  fontSize: "16px",
};

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "15px",
  width: "150px",
  height: "150px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100px",
  height: "100px",
};

export default Countries;
