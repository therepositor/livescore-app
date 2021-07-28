import React from 'react';
import NewsNavBar from './NewsNavBar';
import useDeepCompareEffect from 'use-deep-compare-effect';

const News = () =>  {
    const [headlines, setHeadlines] = React.useState([])

    
    useDeepCompareEffect(() => {

        const fetchHeadlines = async () => {
           
            const resp = await fetch("https://free-football-soccer-videos1.p.rapidapi.com/v1/", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "417fbcfbbfmsh1a4fc29dfadaa6dp16235bjsn290cb241d7cc",
                    "x-rapidapi-host": "free-football-soccer-videos1.p.rapidapi.com"
                }
            })

            const data = await resp.json()
           data?.length && setHeadlines(data)
        }
           fetchHeadlines()
        }, [headlines] )

        console.log(headlines)
        
        function regexExpression(input) {
            let regex = /https?:\/\/(www.)?scorebat\.com\/?embed\/v\/\w+\/\?utm_source=api&utm_medium=video&utm_campaign=dflt/i;
            const test = regex.test(input);
            console.log(test);
           const match = input.match(regex);
           return match['0']
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
                            <iframe title={video.title} src={`${regexExpression(video.videos[0].embed)}`} 
                            width='320' height='240' frameBorder="0"></iframe>
                        </div>
                    </div>
                )
            })}
            </section>
            <footer className='news-footer'>
                    <h5>Sports News - Latest Sports News &amp; Today's Headlines</h5>
                    <p>Stick with LiveScore for the latest sports news from around the world. Regardless of which sport is your favourite, you’ll always find the biggest headlines and stories in one place. From football to cricket, tennis to motorsport, we cover all the top stories from the most popular sports and much, much more. Throw in betting tips for anyone 18 or over and you have a match-winning formula at your fingertips. Breaking sports news flows thick and fast and we’re always here to deliver regular updates and insight as stories develop. Regardless of the time, the sports world never sleeps as so many different leagues, events and tournaments take place globally. And that means you’ll always have sports news to consume 24/7.</p>
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

export default News