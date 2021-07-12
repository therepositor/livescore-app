import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {AppendToday} from '../Utils/AppendDay';
import { Link } from 'react-router-dom';
import useDeepCompareEffect from 'use-deep-compare-effect';

const CompetitionHeader = ({fixtures}) => {
    const [allLeagues, setAllLeagues] = React.useState([])
    const [countries, setCountries] = React.useState([])
    const [matches, setMatches] = React.useState([])

    console.log({fixtures})
    const setIdResponse = new Set()

    
    useDeepCompareEffect(() => {
        // set countries array
        const setCountriesObj = new Set()
        for (let i=0; i<fixtures.length; i++)   {
            const element = fixtures[i].league.country
            setCountriesObj.add(element)
        }
        const countriesArr = Array.from(setCountriesObj)
        setCountries(countriesArr)
        console.log( 'countriesArr',countriesArr)
        // set leagues array
        const setLeagueObj = new Set();
        for (let i=0; i<fixtures.length; i++)   {
            const element = fixtures[i].league.name
            setLeagueObj.add(element)
        }
        const leaguesArr = Array.from(setLeagueObj)
        const sortedLeaguesArr = [];
        for (let i=0; i<leaguesArr.length; i++) {
            const element = leaguesArr[i];
            const leagueObj = {
                leagueName:  fixtures[i].league.name,
                leagueFlag: fixtures[i].league.flag,
                leagueRound:    fixtures[i].league.round,
                leagueCountry:  fixtures[i].league.country,
                matches: []
                                }
            const arrOfObj = fixtures.filter(fixture => {
                if (fixture.league.name !== element)   return
                return fixture.teams;
            });
            leagueObj.matches = arrOfObj
            sortedLeaguesArr.push(leagueObj)
        }
        setAllLeagues(sortedLeaguesArr)
        console.log('leagues...', allLeagues)
        // set matches array
        const setMatchesObj = new Set()
        for (let i=0; i<fixtures.length; i++)   {
            const element = fixtures[i]
            setMatchesObj.add(element)
        }
        
        const setIdResponse = new Set()
        for (let i=0; i<fixtures.length; i++)   {
            const element = fixtures[i].league.id
            setIdResponse.add(element)
        }
        console.log(setIdResponse)

        const uniqueIds = Array.from(setIdResponse)
        const sortedLeagues = [];
        for (let i=0; i<uniqueIds.length; i++) {
        const id = uniqueIds[i];
        const leagueObj = {
            leagueName:  fixtures[i].league.name,
            leagueFlag: fixtures[i].league.flag,
            leagueRound:    fixtures[i].league.round,
            leagueCountry:  fixtures[i].league.country,
            matches: []
                            }
        const arrOfObj = fixtures.filter(fixture => {
            if (fixture.league.id !== id)   return
            return fixture.teams;
        });
        leagueObj.matches = arrOfObj
        sortedLeagues.push(leagueObj)
    }
    setMatches(sortedLeagues)
    console.log('matches....', matches);
    
    }, [allLeagues, fixtures, setIdResponse, countries, matches])
    
    console.log(allLeagues)
    const Content = () => countries?.length && countries.map((country) => {
        
        return allLeagues.map((league, index) => {
            if (league.leagueCountry !== country) return;
           return matches.map((match) => {
                if (match.leagueName !== league && match.leagueCountry !== country) return;
                return (
                    <div>
                        <div key={index} className='fixtures_container'>
                             <div className='comp_header'>
                                 <div className='img_container'>
                                    <img 
                                    className='competition_logo'
                                    src={match.leagueFlag}
                                    alt={`flag of ${match.leagueCountry}`}
                                    width='20' height='15'
                                    />
                                 </div> 
                                 <Link  className='competition_name'>{match.leagueCountry}</Link>
                                 <Link className='league_group'>{match.leagueName} - {match.leagueRound}</Link>
                                 <span className='date'>{AppendToday()}</span>
                             </div>
                             {match.matches.map((fixture, subIndex) => {
                                 return (
                             <div key={subIndex} className='fixtures'>
                                    <div className='live_match' style={{backgroundColor: fixture.fixture.status.elapsed 
                                                        && fixture.fixture.status.long !== 'Match Finished' 
                                                        ? 'orange' : 'black'}}></div>
                                    <div className='timestamp'>{fixture.fixture.status.long === 'Not Started' ? ''
                                                :fixture.fixture.status.long === 'Time to be defined' ? ''
                                                :fixture.fixture.status.long === 'Match Postponed' ? 'postp'
                                                :fixture.fixture.status.long === 'Match Finished' ? 'FT'
                                                : `${fixture.fixture.status.elapsed}'`}
                                    </div>
                                    <div className='teamOne_teamTwo_scoreSheet'> 
                                          <div className='teams'>
                                              <div className='team'>{fixture.teams.home.name}</div>
                                              <div className='score'>{fixture.fixture.status.long === 'Not Started' ? '?'
                                                    : fixture.fixture.status.long === 'Match Finished' ? fixture.goals.home
                                                    : fixture.fixture.status.elapsed ? fixture.goals.home
                                                    : '?'}
                                              </div>
                                          </div>
                                          <div className='teams'>
                                              <div className='team'>{fixture.teams.away.name}</div>
                                              <div className='score'>{fixture.fixture.status.long === 'Not Started' ? '?'
                                                    : fixture.fixture.status.long === 'Match Finished' ? fixture.goals.away
                                                    : fixture.fixture.status.elapsed ? fixture.goals.away
                                                    : '?'}
                                              </div>
                                          </div>
                                    </div>
                                    <div className='star'>
                                         <FontAwesomeIcon icon = {faStar} />
                                    </div>
                             </div>
                                 )
                             })}

                        </div>
                    </div>
                )
            })
        }) 
    })  


    if (!fixtures.length) return <div>No events available right now</div>;
    return <Content />

}

export default CompetitionHeader