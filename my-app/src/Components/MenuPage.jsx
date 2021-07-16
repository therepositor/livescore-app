import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const MenuPage = () =>  {

    const [countries, setCountries] = React.useState([])

    React.useEffect(() =>   {
        const fetchCountries = async () => {
            const resp = await fetch("https://football-pro.p.rapidapi.com/api/v2.0/countries?tz=Europe%2FAmsterdam&page=1", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "417fbcfbbfmsh1a4fc29dfadaa6dp16235bjsn290cb241d7cc",
                    "x-rapidapi-host": "football-pro.p.rapidapi.com"
                }
            })
            const data = await resp.json()
            data?.data && setCountries(data.data)
        }
        fetchCountries()
    }, [countries])
    console.log(countries)

    return ( 
        
        <div className='menupage-conatiner'>
            {countries && countries.map((country, index) =>  {
                return (
                    <div key={index} className="country-row">
                        <div className="countryname-flag">
                            <div className="flag"><img  width='25' height='20' src={country.image_path} alt={`${country.name} flag`} /></div>
                            <div className="country-name">{country.name}</div>
                        </div>
                        <div className="right-arrow">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                )
        })}
        </div>

    )
}

export default MenuPage