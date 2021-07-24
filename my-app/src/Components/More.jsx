import React from 'react'
import { DateTime } from 'luxon'
import { AppendToday } from '../Utils/AppendDay'

const More = () =>  {

    return (
        <div className='more-container'>
            <div className='date-nav'>{AppendToday()} {DateTime.now().toFormat('MMMM dd, yyyy')}</div>
            <div className='rows'>
                <div className='row'>FOOTBALL</div>
                <div className='row'>HOCKEY</div>
                <div className='row'>BASKETBALL</div>
                <div className='row'>TENNIS</div>
                <div className='row'>CRICKET</div>
                <div className='row'>NEWS</div>
                <div className='row'>MOBILE</div>
                <div className='row'>CONTACT</div>
                <div className='row'>SETTINGS</div>
                <div className='row'>CLOSE</div>
            </div>
            <footer>
                <h4>Sport News - Latest Sports News &amp; Today&apos;s Headlines</h4>
                <p>Stick with LiveScore for the latest sports news from around the world. Regardless of which sport is your favourite, you&apos;ll always find the biggest headlines and stories in one place. From football to cricket, tennis to motosport, we cover all the top stories from the most popular sports and much, much more. Throw in betting tips for anyone 18 or over and you have a match-winning formula at your fingertips. <br></br>
                Breaking sports news flows thick and fast and we&apos;re always here to deliver regular updates and insight as stories develop. Regardless of the time, the sports world never sleeps as so many different leagues, events and tournaments take place globally. And that means you&apos;ll always have sports news to consume 24/7.
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

export default More