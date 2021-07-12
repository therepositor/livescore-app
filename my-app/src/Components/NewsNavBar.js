import React from 'react'
import { BrowserRouter, Link, Switch } from 'react-router-dom'


const NewsNavBar = () =>    {

    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <Link to='/news' className='news_navLink'>All</Link>
                    <Link to='/football' className='news_navLink'>Football</Link>
                    <Link to='/tennis' className='news_navLink'>Tennis</Link>
                    <Link to='/cricket' className='news_navLink'>Cricket</Link>
                    <Link to='/motorsport' className='news_navLink'>Motorsport</Link>
                    <Link to='/horse-racing' className='news_navLink'>Horse Racing</Link>
                    <Link to='/golf' className='news_navLink'>Golf</Link>
                    <Link to='/boxing' className='news_navLink'>Boxing</Link>
                    <Link to='/olympics' className='news_navLink'>Olympics</Link>
                    <Link to='/basketball' className='news_navLink'>Basketball</Link>         
                </React.Fragment>
            </Switch>
        </BrowserRouter>
       
    )
}

export default NewsNavBar