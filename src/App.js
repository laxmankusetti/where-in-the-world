import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Head from './Head';
import CountryPage from './CountryPage';
import { nanoid } from 'nanoid';


function App() {
  const [countries, setCountries] = useState([])
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    async function fetchCountries(){
      let response = await fetch('data.json')
      let countriesData = await response.json()
      setCountries(countriesData)
    }

    fetchCountries()
  }, [])

  return (
    <>
      <Head darkMode={darkMode} setDarkMode={setDarkMode} />
      <BrowserRouter>
        <div className={`App${darkMode ? ' dark-mode' : ''}`}>
          <Routes>
            <Route path='/' element={<HomePage countriesList={countries} darkMode={darkMode} />}></Route>
            {countries.map(country => (
              <Route path={`/countries/${country.name}`} element={<CountryPage country={country} darkMode={darkMode}/>} key={nanoid()}></Route>
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
