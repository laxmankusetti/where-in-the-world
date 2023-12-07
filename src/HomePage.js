import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import { nanoid } from 'nanoid';
import magnifyingGlass from './images/magnifyingGlass.svg';

function HomePage({ countriesList, darkMode }) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countriesList);

  useEffect(() => {
    // On component mount or when countriesList changes, show all countries
    setFilteredCountries(countriesList);
  }, [countriesList]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);

    // Update filtered countries based on the search input
    const searchTerm = event.target.value.toLowerCase();
    const filtered = countriesList.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setFilteredCountries(filtered);
  };

  function handleSelect(e){
    const selectedRegion = e.target.value.toLowerCase()
    const filtered = countriesList.filter((country) =>
      country.region.toLowerCase().includes(selectedRegion)
    );
    setFilteredCountries(filtered)
  }

  return (
    <div className={`home-page${darkMode ? ' dark-mode' : ''}`}>
      <div className='search-select-container'>
        <div className='input-container'>
          <input
            type='search'
            placeholder='Search for a country...'
            value={searchInput}
            onChange={handleInputChange}
          />
          <span className='magnifying-glass'>
            <img src={magnifyingGlass} alt={magnifyingGlass} />
          </span>
        </div>
        <div className='select-input-container'>
            <select id='select-region' onChange={handleSelect}>
                <option value=''>Filter by region</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
                <option value='Polar'>Polar</option>
            </select>
        </div>
      </div>

      {filteredCountries.length === 0 && searchInput && <h2>No matching countries found.</h2>}

      {filteredCountries.map((country) => (
        <Link to={`/countries/${country.name}`} className='country-link' key={nanoid()}>
          <CountryCard country={country} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
