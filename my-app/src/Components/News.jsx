import React from 'react';
import NewsNavBar from './NewsNavBar';

const News = () =>  {
    const [headlines, setHeadlines] = React.useState([])

    
    React.useEffect(() => {

        const fetchHeadlines = async () => {
           
            const resp = await fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "417fbcfbbfmsh1a4fc29dfadaa6dp16235bjsn290cb241d7cc",
                    "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com"
                }
            })
            // .catch(err => {
            //     console.error(err);
            // });
            // console.log(data.response)
            
            const data = await resp.json()
           data?.length && setHeadlines(data)
        }
           fetchHeadlines()
        
        
        }, [] )
        console.log(headlines)
    
        function regexExpression(input) {
            let regex = /[^']*/i;
            const test = regex.test(input);
            console.log(test)
           const match = regex.exec(input);
           console.log(match)
            
        }
    return  (
        <div className='news-container'>
            <div className='news_navBar'>
                <NewsNavBar />
            </div>

            <section className='thumbnail_section'>
            {headlines.map((headline, index) => {
            return (
                <div key={index} className='highlight_card'>
                    <div className='card_image'>
                        <img src={headline.thumbnail} alt={`${headline.title} thumbnail`} />
                        <span className='card_tag'>{headline.competition.name}</span>
                        <p className='card_title'>{headline.title}</p>
                        <span className='card_timestamp'></span>
                    </div>
                </div>
            )
        })}
            </section>
            <h2>Top highlights</h2>
            <section>
            {headlines.map((video, index) =>    {
                return  (
                    <div key={index} className="card_preview">
                        <p className='preview_title'>{video.title}</p>
                        <div className="preview_image">
                        <video width='320' height='240' controls>
                            <source src={regexExpression(video.videos[0].embed)} type="video/mp4" />
                        </video>
                        </div>
                    </div>
                )
            })}
            </section>
        </div>
    )
}

export default News