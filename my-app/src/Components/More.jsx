import React from 'react'
import { DateTime } from 'luxon'
import { AppendToday } from '../Utils/AppendDay'

const More = () =>  {

    return (
        <div className='more-container'>
            <div className='date-nav-bar'>{AppendToday()} - {DateTime.now().toLocaleString(DateTime.DATE_MED)}</div>
            <div className='more-options'>
                <div className='more-option'> <a href="football.html">FOOTBALL</a></div>
                <div className='more-option'> <a href="hockey.html">HOCKEY</a></div>
                <div className='more-option'> <a href="basketball.html">BASKETBALL</a></div>
                <div className='more-option'> <a href="tennis.html">TENNIS</a></div>
                <div className='more-option'> <a href="cricket.html">CRICKET</a></div>
                <div className='more-option'> <a href="news.html">NEWS</a></div>
                <div className='more-option'> <a href="mobile.html">MOBILE</a></div>
                <div className='more-option'> <a href="contact.html">CONTACT</a></div>
                <div className='more-option'> <a href="advertise.html">ADVERTISE</a></div>
                <div className='more-option'> <a href="settings.html">SETTINGS</a></div>
                <div className='more-option'> <a href="close.html">CLOSE</a></div>
            </div>
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

export default More