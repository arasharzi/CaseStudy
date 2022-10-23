import React, { useEffect, useState } from 'react'
import { MDBInput, MDBInputGroup, MDBIcon, MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, 
    MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit'
import PolicyService from '../Services/PolicyService'
import { MDBRow } from 'mdb-react-ui-kit'
import { MDBCol } from 'mdb-react-ui-kit'


function Body()
{
    const [staticModal, setStaticModal] = useState(false)
    const toggleShow = () => 
    {
        setStaticModal(!staticModal)
    }
    const [policyHolders, setPolicyHolders] = useState([])
    const [policyHolder, setPolicyHolder] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [disabled, setDisabled] = useState(true)
 
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [st, setSt] = useState()
    const [zipcode, setZipcode] = useState()

    const [policyNumber, setPolicyNumber] = useState()
    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [year, setYear] = useState()

    useEffect(()=>
    {
        PolicyService.getPolicyHolders()
            .then((Response) => setPolicyHolders(Response.data)) 
    }, [])
    
    function updateVehicles()
    {
        policyHolder.vehicles = vehicles
    }
    
    function updatePolicyholder()
    {
        toggleShow()
        if (firstName != null)
        {
            policyHolder.firstName = firstName
            setFirstName('')
        }
        if (lastName != null)
        {
            policyHolder.lastName = lastName
            setLastName('')
        }
        if (phoneNumber != null)
        {
            policyHolder.phoneNumber = phoneNumber
            setPhoneNumber('')
        }
        if (email != null)
        {
            policyHolder.email = email
        }

        if (address != null)
        {
            policyHolder.address = address
            setAddress('')
        }
        if (city != null)
        {
            policyHolder.city = city
            setCity('')
        }
        if (st != null)
        {
            policyHolder.state = st
            setSt('')
        }
        if (zipcode != null)
        {
            policyHolder.zipcode = zipcode
            setZipcode('')
        }

        PolicyService.updatePolicyHolder(policyHolder, vehicles)
    } 

    return (
        <div>
            {/* MODAL */}
                <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
                    <MDBModalDialog size='lg'>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>{policyHolder.firstName} {policyHolder.lastName}</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                    <MDBRow>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.firstName} id='policyholder-firstname' type='text' aria-describedby='firstname' 
                                                disabled={disabled} autoComplete='off' onChange={event => setFirstName(event.target.value)} value={firstName} />
                                            <div id='firstname' className='form-text'>
                                                First Name
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.lastName} id='policyholder-lastname' type='text' aria-describedby='lastname' 
                                                disabled={disabled} autoComplete='off' onChange={event => setLastName(event.target.value)} value={lastName} />
                                            <div id='lastname' className='form-text'>
                                                Last Name
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.phoneNumber} id='policyholder-phonenumber' type='text' aria-describedby='phonenumber' 
                                                disabled={disabled} autoComplete='off' onChange={event => setPhoneNumber(event.target.value)} value={phoneNumber} />
                                            <div id='phonenumber' className='form-text'>
                                                Phone Number
                                            </div>
                                        </MDBCol>
                                    </MDBRow>                                    
                                    <MDBRow>
                                        <MDBCol>                                            
                                            <MDBInput label={policyHolder.address} id='policyholder-address' type='text' aria-describedby='address'
                                                disabled={disabled} autoComplete='off' onChange={event => setAddress(event.target.value)} value={address} />
                                            <div id='address' className='form-text'>
                                                Address
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.city} id='policyholder-city' type='text' aria-describedby='city' 
                                                disabled={disabled} autoComplete='off' onChange={event => setCity(event.target.value)} value={city} />
                                            <div id='city' className='form-text'>
                                                City
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.state} id='policyholder-state' type='text' aria-describedby='state' 
                                                disabled={disabled} autoComplete='off' onChange={event => setSt(event.target.value)} value={st} />
                                            <div id='state' className='form-text'>
                                                State
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.zipcode} id='policyholder-zipcode' type='text' aria-describedby='zipcode' 
                                                disabled={disabled} autoComplete='off' onChange={event => setZipcode(event.target.value)} value={zipcode} />
                                                <div id='zipcode' className='form-text'>
                                                    Zipcode
                                                </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label={policyHolder.email} id='policyholder-email' type='text' aria-describedby='email' 
                                                    disabled={disabled} autoComplete='off' onChange={event => setEmail(event.target.value)} value={email} />
                                                    <div id='email' className='form-text'>
                                                        Email
                                                    </div>
                                        </MDBCol>
                                    </MDBRow>
                                            


                                    <hr />
                                    <div>Vehicles</div>
                                    <MDBTable align='middle'>
                                    <MDBTableHead>
                                    <tr>
                                        <th scope='col'>Policy Number</th>
                                        <th scope='col'>Make</th>
                                        <th scope='col'>Model</th>
                                        <th scope='col'>Year</th>
                                        <th scope='col'>Claims</th>
                                    </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                    {                                        
                                        vehicles.map
                                        (
                                            vehicles =>
                                            <tr>
                                                <td>
                                                    <p className='fw-bold mb-1'>{vehicles.policy_number}</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{vehicles.make}</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{vehicles.model}</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{vehicles.year}</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>{vehicles.claims.id}</p>   
                                                </td>
                                            </tr>
                                        )
                                    }    
                                            <tr>
                                                <td>
                                                    <MDBInput label='Policy Number' id='vehicle-policynumber' type='text' disabled={disabled} autoComplete='off'
                                                        onChange={event => setPolicyNumber(event.target.value)} value={policyNumber}/>
                                                </td>
                                                <td>
                                                    <MDBInput label='Make' id='vehicle-make' type='text' disabled={disabled} autoComplete='off'
                                                        onChange={event => setMake(event.target.value)} value={make}/>
                                                </td>
                                                <td>
                                                    <MDBInput label='Model' id='vehicle-model' type='text' disabled={disabled} autoComplete='off'
                                                        onChange={event => setModel(event.target.value)} value={model}/>
                                                </td>
                                                <td>
                                                    <MDBInput label='Year' id='vehicle-year' type='text' disabled={disabled} autoComplete='off'
                                                        onChange={event => setYear(event.target.value)} value={year}/>
                                                </td>
                                                <td>
                                                  
                                                </td>
                                            </tr>                                                                      
                                    </MDBTableBody>
                                    </MDBTable>
                                    <MDBBtn color='link' rounded size='sm' onClick={() => 
                                    {
                                        setVehicles(vehicles.concat(
                                            {
                                                "make": make,
                                                "model": model,
                                                "year": year,
                                                "policy_number": policyNumber,
                                                "claims": []
                                            }))
                                            
                                        updateVehicles()
                                        setMake('')
                                        setModel('')
                                        setYear('')
                                        setPolicyNumber('')
                                    }} disabled={disabled}>
                                        Add Vehicle 
                                    </MDBBtn>
                                    
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleShow}>
                                    Close
                                </MDBBtn>
                                <MDBBtn disabled={disabled} onClick={updatePolicyholder}>
                                    Save
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

            {/* Body */}
            <div className='policy-information-container justify-content-center'>
                <MDBInputGroup className='mb-3 justify-content-center' noBorder textBefore={<MDBIcon fas icon='search' />}>
                    <MDBInput id='form12Example1' label='Policy Number' />
                </MDBInputGroup>

                <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Phone Number</th>
                        <th scope='col'>Pending Claims</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
                    policyHolders.map
                    (
                        policyHolders =>
                        <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg' 
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />                                            {/* use image from db or something? */}
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{policyHolders.firstName} {policyHolders.lastName}</p>
                                    <p className='text-muted mb-0'>{policyHolders.email}</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{policyHolders.address} {policyHolders.zipcode}</p>
                                <p className='text-muted mb-0'>{policyHolders.city}, {policyHolders.state}</p>
                            </td>
                            <td>
                                {policyHolders.phoneNumber}
                            </td>
                            <td>
                                <MDBBadge color='success' pill> {/* colors= success=green, primary=blue, warning=yellow */}
                                    {policyHolders.pendingClaim}Active todo
                                </MDBBadge>
                            </td>
                            <td>
                                <MDBBtn color='link' rounded size='sm' onClick={() => 
                                    {
                                        setDisabled(true)
                                        toggleShow()
                                        setPolicyHolder(policyHolders)
                                        setVehicles(policyHolders.vehicles)
                                    }}>
                                View
                                </MDBBtn>
                                <MDBBtn color='link' rounded size='sm' onClick={() => 
                                    {
                                        setDisabled(false)
                                        toggleShow()
                                        setPolicyHolder(policyHolders)
                                        setVehicles(policyHolders.vehicles)
                                    }}>
                                Edit
                                </MDBBtn>
                            </td>
                        </tr>
                    )
                }
                </MDBTableBody>
                </MDBTable>
            </div>            
        </div> 
    );
}

export default Body