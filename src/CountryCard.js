import React from 'react'

function CountryCard({country}) {
  return (
    <>
        <div className='country-card'>
            <div className='country-card-image-container'>
                <img src={country.flag} alt={country.flag} className='country-card-image'/>
            </div>
            <div className='country-card-details-container'>
                <p className='country-card-name'>{country.name}</p>
                <p className='small-text'>
                    Population: <span className='population'>{country.population}</span>
                </p>
                <p className='small-text'>
                    Region: <span className='region'>{country.region}</span>
                </p>
                <p className='small-text'>
                    Capital: <span className='capital'>{country.capital}</span>
                </p>
            </div>
        </div>
    </>
  )
}

export default CountryCard
