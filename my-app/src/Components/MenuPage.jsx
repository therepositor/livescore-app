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
            .catch(err => {
                console.error(err);
            });
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
                            <div className="flag"><img  width='25' height='20' 
                            src={country.image_path} alt={`${country.name} flag`} /></div>
                            <div className="country-name">{country.name}</div>
                        </div>
                        <div className="right-arrow">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                )

             })}
             <footer>
                <p>&copy; 1996 - 2021 LiveScore</p>
                <div className='footer-navlinks'>
                    <a href="careers.html">Careers</a> | 
                    <a href="mobile.html">Mobile</a> | 
                    <a href="advertise.html">Advertise</a> | 
                    <a href="contact.html">Contact</a> | 
                    <a href="news-publishers.html">News Publishers</a> | 
                    <a href="modern-slavery-act.html">Modern Slavery Act</a> | 
                    <a href="privacy-notice.html">Privacy Notice</a> | 
                    <a href="cookie-policy.html">Cookie Policy</a> | 
                    <a href="terms-of-use.html">Terms of Use</a> | 
                    <a href="corporate.html">Corporate</a>
                </div>
             </footer>

        </div>

    )
}

export default MenuPage