import React from 'react';
import Schedule from './Schedule';
import CompetitionHeader from './CompetitionHeader';
import { fixturesByDate } from '../Utils/AppendDay';



const Home = () => {
    const [fixtures, setFixtures] = React.useState([])

    
    React.useEffect(() => {

        const fetchFixturesByDate = async () => {
            const resp = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${fixturesByDate}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "417fbcfbbfmsh1a4fc29dfadaa6dp16235bjsn290cb241d7cc",
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            })
            // .catch(err => {
            //     console.error(err);
            // });
            const data = await resp.json()
           data?.response && setFixtures(data.response)
            // console.log(data.response)
        }
        fetchFixturesByDate()
            
          
    }, [])

    return (
            <div className = 'container'>
                <Schedule fixtures={fixtures} />
                <CompetitionHeader fixtures={fixtures} />
                <footer>
                <h4>Welcome to LiveScore - Latest Football Live Scores, Results, Fixtures and Tables</h4>
                <p>
                    The number one destination for real time scores for Football, Cricket, Tennis, Basketball, Hockey and more. LiveScore.com is the go-to destination for latest football scores and news from around the world. Whether you’re after today’s results, fixtures or live updates as the goals fly in, all the top leagues and competitions are covered in unbeatable detail. We provide fixtures, live scores, results and tables from the Premier League, Serie A, LaLiga, the Bundesliga, Ligue 1 and other top tournaments such as the Champions League and Europa League. But that’s not all because domestic cup competitions including the world famous FA Cup and international tournaments such as the World Cup and Nations League are also at your fingertips. With match info and line-ups thrown into the mix, you won’t need to look anywhere else for football stats. Users in the UK and Ireland can get stuck in with our live streaming service, offering matches from Serie A, the Eredivisie and other top leagues, while anyone in Nigeria can enjoy our net-busting live coverage of the Premier League.<br></br>
                    <span>Links: 
                            <a href="english-premier-league.html"> English Premier League</a>, 
                            <a href="english-premier-league.html"> La liga</a>, 
                            <a href="english-premier-league.html"> Serie A</a>, 
                            <a href="english-premier-league.html"> BundesLiga</a>, 
                            <a href="english-premier-league.html"> Ligue 1</a>, 
                            <a href="english-premier-league.html"> Champions League</a> 
                    </span>
                </p>
                <p>&copy; 1998-2021 LiveScore</p>
                <p>
                    <a href="careers.html">Careers </a> |
                    <a href="mobile.html"> Mobile </a> |
                    <a href="advertise.html"> Advertise </a> |
                    <a href="contact.html"> Contact </a> |
                    <a href="news-publishers.html"> News Publishers </a> |
                    <a href="modern-slavery-act.html"> Modern Slavery Act </a> |
                    <a href="privacy-notice.html"> Privacy Notice </a> |
                    <a href="cookie-policy.html"> Cookie Policy </a> |
                    <a href="terms-of-use.html"> Terms of Use </a> |
                    <a href="corporate.html"> Corporate </a>
                </p>
            </footer>
             
            </div>
    )
}

export default Home