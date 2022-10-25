import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, 
  MDBNavbarLink, MDBCollapse, MDBIcon, MDBInputGroup, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

function Header({nav}) 
{
  const [homeActive, setHomeActive] = useState(true)
  const [tableActive, setTableActive] = useState(false)
  const [claimsActive, setClaimsActive] = useState(false)
  const [logoutActive, setLogoutActive] = useState(false)

  function navigate(e)
  {
    switch (e.target.id)
    {
      case 'home':
        if (!homeActive)
        {
          setHomeActive(true)
          setTableActive(false)
          setClaimsActive(false)
          setLogoutActive(false)
          nav('home')
        }
        break
      case 'table':
        if (!tableActive)
        {
          setHomeActive(false)
          setTableActive(true)
          setClaimsActive(false)
          setLogoutActive(false)
          nav('table')
        }
        break
      case 'claims':
        if (!claimsActive)
        {
          setHomeActive(false)
          setTableActive(false)
          setClaimsActive(true)
          setLogoutActive(false)
          nav('claims')
        }
        break
      case 'logout':
        if (!logoutActive)
        {
          setHomeActive(false)
          setTableActive(false)
          setClaimsActive(false)
          setLogoutActive(true)
          nav('logout')
        }
        break
      default:
        break
    }    
  }

  return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand>SomeCorp</MDBNavbarBrand>

            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink className='link' id='home' active={homeActive} onClick={navigate}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='link' id='table' active={tableActive} onClick={navigate}>
                  Policy Holders
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='link' id='claims' active={claimsActive} onClick={navigate}>
                  Claims
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled className='link' id='logout' active={logoutActive} onClick={navigate}>
                  Logout
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>


          {/* TODO: SEARCH FUNCTIONALITY? */}
          {/*
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3' noBorder textBefore={<MDBIcon fas icon='search' />}>
              <MDBInput className='form-control' label="Policy Number" aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn>              
            </MDBInputGroup>
          */}

        </MDBContainer>
      </MDBNavbar>
  );
}
export default Header