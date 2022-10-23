import '../Styles/main-styles.css'
import React from "react"
import Header from './Header'
import Body from './Body'
import Footer from './Footer'


function Home ()
{   
    return (
        <div className='home-container'>
            <div className='header'>
                <Header />
            </div>
            <div className='body'>
                <Body />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>       
    )    
};

export default Home