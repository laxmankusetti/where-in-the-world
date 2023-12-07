import React from 'react'
import { Link } from 'react-router-dom'
import leftLongArrow from './images/leftLongArrow.svg'
import { nanoid } from 'nanoid'

function CountryPage({country, darkMode}) {
  return (
    <div className={darkMode ? 'country-page dark-mode' : 'country-page'}>
      <Link to='/' className='back-btn'>
        <span className='left-long-arrow'>
            <img src={leftLongArrow} alt={leftLongArrow}/>
        </span>
        Back
    </Link>

    <div className='country-container'>
        <div className='country-image-container'>
            <img src={country.flag} alt={country.flag}/>
        </div>

        <div className='country-details'>
          <h3 className='country-name'>{country.name}</h3>
          <div className='country-brief'>
            <p className='country-native'>Native Name: <span>{country.nativeName}</span></p>
            <p className='country-population'>Population: <span>{country.population}</span></p>
            <p className='country-region'>Region: <span>{country.region}</span></p>
            <p className='country-sub-region'>Sub Region: <span>{country.subregion}</span></p>
            <p className='country-capital'>Capital: <span>{country.capital}</span></p>
            <p className='country-top-level-domain'>Top Level Domain: <span>{country.topLevelDomain}</span></p>
            <p className='country-currencies'>Currencies: <span>{country.currencies[0].name}</span></p>
            <p className='country-languages'>Languages: {country.languages?.map(language => (<span className='country-language' key={nanoid()}>{language.name}</span>))}</p>
          </div>
          <div className='border-countries'>
            <span className='border-countries-heading'>Border countries: {country.borders?.map(border => (<span key={nanoid()}>{border}</span>))}</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CountryPage
