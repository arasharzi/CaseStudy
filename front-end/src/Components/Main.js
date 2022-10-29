import '../Styles/main-styles.css'
import React, { useState } from "react"
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Table from './Table'
import Claim from './Claim'

function Main ()
{   
    const [home, setHome] = useState(true)
    const [table, setTable] = useState(false)
    const [claims, setClaims] = useState(false)
    const [logout, setLogout] = useState(false)

     function nav(n)
    {
        switch(n)
        {
            case 'home':
                setHome(true)
                setTable(false)
                setClaims(false)
                setLogout(false)
                break
            case 'table':
                setHome(false)
                setTable(true)
                setClaims(false)
                setLogout(false)
                break
            case 'claims':
                setHome(false)
                setTable(false)
                setClaims(true)
                setLogout(false)
                
                break
            case 'logout':
                setHome(false)
                setTable(false)
                setClaims(false)
                setLogout(true)
                break
            default:
                break
        }
    }


    return (
        <div className='home-container'>
            <div className='header'>
                <Header nav={nav}/>
            </div>
            <div className='body'>
                {
                    home &&
                        <Home />
                }
                {
                    table &&
                        <Table />
                }
                {
                    claims &&
                        <Claim />
                }
                {
                    logout &&
                        null
                } 
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>       
    )    
};

export default Main