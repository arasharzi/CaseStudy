import React, { useState, useEffect } from "react"
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol,
    MDBInput, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBInputGroup,
    MDBModal, MDBModalContent, MDBModalDialog, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter,
    MDBAccordion, MDBAccordionItem, MDBFile } from 'mdb-react-ui-kit'
import PolicyService from "../Services/PolicyService"
import JSZip from 'jszip'
import download from "downloadjs"
import ActiveClaims from "./ActiveClaims"


function Claim ()
{   
    const [verticalActive, setVerticalActive] = useState('active-claims')
    const disabled = true
    const [disableAdditionalClaims, setDisableAdditionalClaims] = useState(false)    

    const [policyHolder, setPolicyHolder] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [st, setSt] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [vehicles, setVehicles] = useState([]) 
    const [claims, setClaims] = useState([])

    const [vehicle, setVehicle] = useState(null)
    const [additionalNotes, setAdditionalNotes] = useState('')
    const [file, setFile] = useState()

    const [policyNumber, setPolicyNumber] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')



    const[search, setSearch] = useState('')

    useEffect(() =>
    {
        if (policyHolder !== null)
        {
            setFirstName(policyHolder.firstName)
            setLastName(policyHolder.lastName)
            setPhoneNumber(policyHolder.phoneNumber)
            setEmail(policyHolder.email)
            setAddress(policyHolder.address)
            setCity(policyHolder.city)
            setSt(policyHolder.state)
            setZipcode(policyHolder.zipcode)
            setVehicles(policyHolder.vehicles) 
        }
    }, [policyHolder])
    
    const handleVerticalClick = (value) => 
    {
      if (value === verticalActive) 
      {
        return;
      }  
      setVerticalActive(value);
    }

    const [staticModal, setStaticModal] = useState(false)
    const toggleShow = () => 
    {
        setStaticModal(!staticModal)
    }

    function getPolicyHolder(e)
    {
        e.preventDefault()
        if (search.trim !== '')
        {
            PolicyService.getPolicyHolderByPolicy(search)
                .then(Response => setPolicyHolder(Response.data))
        }       
        setSearch('')
    }

    function claimPending(approved, closed)
    {
        if (!closed)
        {
            return 'Claim Pending...'
        }
        if (approved)
        {
            return 'Claim Aproved...'
        }
        return 'Claim Denied...'
    }

    function addClaim()
    {
        if (additionalNotes.trim() !== '' && file !== null)
        {
            var zip = new JSZip()
            zip.file(file[0].name, file[0])
            zip.file('note.txt', additionalNotes)
            zip.generateAsync({type: 'base64'})
                .then(content =>
                    {                        
                        setClaims(claims.concat(
                            {
                                "data": content,
                                "extension": '.zip',
                                "closed": false,
                                "claimApproved": false,
                            }))
                    })                    
        }
    }

    function updateClaims()
    {   
         policyHolder.vehicles[vehicles.indexOf(vehicle)].claims = claims
         PolicyService.updatePolicyHolder(policyHolder, vehicles)
         setDisableAdditionalClaims(false)
         setAdditionalNotes('')
         document.getElementById('customFile').value = ''
         console.log(policyHolder)
         toggleShow()
    }


    return (
        <div id='claim' className='top-padding-30 bottom-padding-100'>
            <MDBRow  className='width-max'>
                <MDBCol size='2'>
                    <MDBTabs className='flex-column text-center'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('active-claims')} active={verticalActive === 'active-claims'}>
                                Active Claims
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('new-claim')} active={verticalActive === 'new-claim'}>
                                New Claim
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCol>
                <MDBCol size='9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={verticalActive === 'active-claims'}>

                            {/* START ACTIVE CLAIMS */}
                                <ActiveClaims />
                            {/* END ACTIVE CLAIMS */}

                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'new-claim'}>

                            {/* START CLAIM MODEL */}
                            <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
                                <MDBModalDialog size='lg'>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>{firstName} {lastName}</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <MDBInput label={firstName} id='policyholder-firstname' type='text' aria-describedby='firstname' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='firstname' className='form-text'>
                                                            First Name
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={lastName} id='policyholder-lastname' type='text' aria-describedby='lastname' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='lastname' className='form-text'>
                                                            Last Name
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={phoneNumber} id='policyholder-phonenumber' type='text' aria-describedby='phonenumber' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='phonenumber' className='form-text'>
                                                            Phone Number
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>                                    
                                                <MDBRow>
                                                    <MDBCol>                                            
                                                        <MDBInput label={address} id='policyholder-address' type='text' aria-describedby='address'
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='address' className='form-text'>
                                                            Address
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={city} id='policyholder-city' type='text' aria-describedby='city' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='city' className='form-text'>
                                                            City
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={st} id='policyholder-state' type='text' aria-describedby='state' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='state' className='form-text'>
                                                            State
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={zipcode} id='policyholder-zipcode' type='text' aria-describedby='zipcode' 
                                                            disabled={disabled} autoComplete='off' />
                                                            <div id='zipcode' className='form-text'>
                                                                Zipcode
                                                            </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={email} id='policyholder-email' type='text' aria-describedby='email' 
                                                            disabled={disabled} autoComplete='off' />
                                                            <div id='email' className='form-text'>
                                                                Email
                                                            </div>
                                                    </MDBCol>
                                                </MDBRow> 
                                                <hr />
                                                <div>Vehicle</div>
                                                <MDBRow>
                                                    <MDBCol>
                                                        <MDBInput label={policyNumber} id='policy-number' type='text' aria-describedby='policy-number' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='policy-number' className='form-text'>
                                                            Policy Number
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={make} id='make' type='text' aria-describedby='make' 
                                                            disabled={disabled} autoComplete='off' />
                                                        <div id='make' className='form-text'>
                                                            Make
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={model} id='model' type='text' aria-describedby='model' 
                                                            disabled={disabled} autoComplete='off' />
                                                            <div id='model' className='form-text'>
                                                                Model
                                                            </div>
                                                    </MDBCol>
                                                    <MDBCol>
                                                        <MDBInput label={year} id='year' type='text' aria-describedby='year' 
                                                            disabled={disabled} autoComplete='off' />
                                                            <div id='year' className='form-text'>
                                                                Year
                                                            </div>
                                                    </MDBCol>
                                                </MDBRow> 
                                                                      
                                                <hr />
                                                <div>Claims</div>
                                                <MDBTable align='middle' className='width-70p'>
                                                <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>Claim Id</th>
                                                    <th scope='col'>Claim Status</th>
                                                    <th scope='col'>Claim Files</th>
                                                </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                {                                        
                                                    claims.map
                                                    (
                                                        claims =>
                                                        <tr key={claims.id}>
                                                            <td>
                                                                <p className='fw-bold mb-1'>{claims.id}</p>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>{claimPending(claims.claimApproved, claims.closed)}</p>
                                                            </td>
                                                            <td>
                                                                <MDBBtn size='sm' color='danger' rounded className='mx-2' onClick={()=>
                                                                    {
                                                                        if (claims.data !== null)
                                                                        {                                                                                                                
                                                                            // var element = document.createElement('a')
                                                                            // element.href = URL.createObjectURL( claims.data)
                                                                            // element.download = 'claims-data.zip'
                                                                            // document.body.appendChild(element)
                                                                            // element.click()
                                                                            download('data:application/zip;base64,'+claims.data, 'claims-data.zip', 'application/zip')
                                                                        }
                                                                    }}> {/* colors= success=green, primary=blue, warning=yellow danger=red */}
                                                                    Download
                                                                </MDBBtn>
                                                            </td>
                                                        </tr>
                                                    )
                                                }                                                                                                                        
                                                </MDBTableBody>
                                                </MDBTable>

                                                <MDBAccordion>
                                                    <MDBAccordionItem collapseId={1} headerTitle='New Claim'>                                                 
                                                        <MDBInput wrapperClass='mb-4' textarea='true' id='info' rows={4} label='Additional note (required)' autoComplete='off' 
                                                            onChange={event => setAdditionalNotes(event.target.value)} value={additionalNotes}/>
                                                        <MDBFile label='Claim Attachment (pdf or word document required)' id='customFile' accept='.doc, .docx, application/pdf' 
                                                               onChange={event => setFile(event.target.files)} />
                                                        <MDBBtn color='link' rounded size='sm' disabled={disableAdditionalClaims} onClick={() => 
                                                        {
                                                            setDisableAdditionalClaims(true)
                                                            addClaim()                                                            
                                                        }}>
                                                            Add Claim 
                                                        </MDBBtn>
                                                    </MDBAccordionItem>
                                                </MDBAccordion>                                                
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn onClick={updateClaims}>
                                                Save
                                            </MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                            {/* END CLAIM MODEL */}
                            
                            {/* START CLAIMS */}
                            <h1>New Claim</h1>
                            <p />                            
                            <MDBInputGroup  className='d-flex w-auto mb-3 justify-content-end' noBorder 
                                textBefore={<MDBIcon fas icon='search' />}>
                                <form className='d-flex w-auto mb-3 justify-content-end'>
                                <MDBInput className='form-control' label="Policy Number" aria-label="Search" type='text' 
                                    onChange={event => setSearch(event.target.value)} value={search}/>
                                <MDBBtn outline onClick={getPolicyHolder}>Search</MDBBtn>   
                                </form>          
                            </MDBInputGroup>

                            <MDBRow>
                                <MDBCol>
                                    <MDBInput label={firstName} id='policyholder-firstname' type='text' aria-describedby='firstname' 
                                            disabled={disabled} autoComplete='off' />
                                    <div id='firstname' className='form-text'>
                                        First Name
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={lastName} id='policyholder-lastname' type='text' aria-describedby='lastname' 
                                            disabled={disabled} autoComplete='off' />
                                    <div id='lastname' className='form-text'>
                                        Last Name
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={phoneNumber} id='policyholder-phonenumber' type='text' aria-describedby='phonenumber' 
                                            disabled={disabled} autoComplete='off' />
                                    <div id='phonenumber' className='form-text'>
                                        Phone Number
                                    </div>
                                </MDBCol>
                            </MDBRow>                                    
                            <MDBRow>
                                <MDBCol>                                            
                                    <MDBInput label={address} id='policyholder-address' type='text' aria-describedby='address'
                                        disabled={disabled} autoComplete='off' />
                                    <div id='address' className='form-text'>
                                        Address
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={city} id='policyholder-city' type='text' aria-describedby='city' 
                                        disabled={disabled} autoComplete='off' />
                                    <div id='city' className='form-text'>
                                        City
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={st} id='policyholder-state' type='text' aria-describedby='state' 
                                        disabled={disabled} autoComplete='off' />
                                    <div id='state' className='form-text'>
                                        State
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={zipcode} id='policyholder-zipcode' type='text' aria-describedby='zipcode' 
                                        disabled={disabled} autoComplete='off' />
                                        <div id='zipcode' className='form-text'>
                                            Zipcode
                                        </div>
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput label={email} id='policyholder-email' type='text' aria-describedby='email' 
                                            disabled={disabled} autoComplete='off' />
                                            <div id='email' className='form-text'>
                                                Email
                                            </div>
                                </MDBCol>
                            </MDBRow>                                

                            <hr />
                            <div>
                                Vehicles
                            </div>
                            <MDBTable align='middle' className='width-70p'>
                                <MDBTableHead>
                                <tr>
                                    <th scope='col'>Policy Number</th>
                                    <th scope='col'>Make</th>
                                    <th scope='col'>Model</th>
                                    <th scope='col'>Year</th>
                                </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                {                                        
                                    vehicles.map
                                    (
                                        vehicles =>
                                        <tr key={vehicles.policy_number}>
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
                                            <td >
                                                <MDBBtn size='sm' color='primary' className='mx-2'  onClick={()=>
                                                    {
                                                        setClaims(vehicles.claims)
                                                        setFile(null)
                                                        setVehicle(vehicles)

                                                        setPolicyNumber(vehicles.policy_number)
                                                        setMake(vehicles.make)
                                                        setModel(vehicles.model)
                                                        setYear(vehicles.year)

                                                        toggleShow()
                                                    }}> {/* colors= success=green, primary=blue, warning=yellow danger=red */}
                                                    Add Claim
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                    )
                                }                                                                        
                                </MDBTableBody>
                            </MDBTable>
                            {/* END CLAIMS */}

                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </div>       
    )    
};

export default Claim