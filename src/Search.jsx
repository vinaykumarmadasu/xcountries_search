// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedCountries = data.map((country) => ({
//           name: country.name.common,
//           flag: country.flags.png,
//         }));
//         setCountries(formattedCountries);
//       })
//       .catch((error) => console.error('Error fetching countries:', error));
//   }, []);

//   const filteredCountries = countries.filter((country) =>
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>Country Search</h1>
//       <input
//         type="text"
//         placeholder="Search for countries..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="country-grid">
//         {filteredCountries.map((country, index) => (
//           <div className="countryCard" key={index}>
//             <img src={country.flag} alt={`Flag of ${country.name}`} />
//             <p>{country.name}</p>
//           </div>
//         ))}
//         {filteredCountries.length === 0 && <p>No countries found.</p>}
//       </div>
//     </div>
//   );
// }

// export default App;
