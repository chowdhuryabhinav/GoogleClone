import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className="home">

           

            <div className="home__header">

                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>

                </div>

                <div className="home__headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <Apps/>
                <Avatar/>
                    
                </div>

            </div>

            <div className="home__body">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png"  alt=""/>


            </div>

            <div className="home__inputContainer">
                <Search />
            </div>

            
        </div>
    )
}

export default Home
