import React, { useState } from "react"
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBInputGroup } from 'mdb-react-ui-kit'
import download from "downloadjs"
import PolicyService from "../Services/PolicyService"

function ActiveClaims()
{
    const [policyHolders, setPolicyHolders] = useState([])  

    function refresh()
    {
            PolicyService.getActiveClaims()
            .then(Response => setPolicyHolders(Response.data))
    }

    function updatePolicyHolder(holder, vehicle, claim)
    {
        for (var v of holder.vehicles)
        {
            if (v.vehicle_id === vehicle.vehicle_id)
            {
                for (var c of v.claims)
                {
                    if (c.id === claim.id)
                    {
                        c = claim
                    }                    
                }                
            }            
        }
        PolicyService.updatePolicyHolder(holder, holder.vehicles)
        refresh()
    }

    return(
        <div>
            <h1>Active Claims</h1>                            
            <p />
            <MDBInputGroup  className='d-flex w-auto mb-3 justify-content-end' noBorder 
                            textBefore={<MDBIcon fas icon='sync' />}>
                            <MDBBtn outline onClick={refresh}>Refresh</MDBBtn>   
        
            </MDBInputGroup>





            <MDBTable align='middle' className='width-70p'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Claim ID</th>
                        <th scope='col'>Policy Number</th>
                        <th scope='col'>Make</th>
                        <th scope='col'>Model</th>
                        <th scope='col'>Year</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                             
            {             
                policyHolders.map(
                    policyHolder =>
                    {
                        return (                           
                        policyHolder.vehicles.map(
                            vehicle =>
                            {      
                                return (
                                    vehicle.claims.map(
                                        claim =>
                                        {
                                            if (claim.closed === false)
                                            {
                                                return(
                                                    <tr key={claim.id}>
                                                        <td>
                                                            <p className='fw-bold mb-1'>{claim.id}</p>
                                                        </td>
                                                        <td>
                                                            <p className='fw-bold mb-1'>{vehicle.policy_number}</p>
                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{vehicle.make}</p>
                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{vehicle.model}</p>
                                                        </td>
                                                        <td>
                                                            <p className='fw-normal mb-1'>{vehicle.year}</p>
                                                        </td>
                                                        <td >
                                                            <MDBBtn size='sm' color='primary' className='mx-2'  onClick={()=>
                                                                {
                                                                    if (claim.data !== null)
                                                                    {                                                                                                               
                                                                        download('data:application/zip;base64,'+claim.data, 'claims-data-'+claim.id+'.zip', 'application/zip')
                                                                    }
                                                                }}> {/* colors= success=green, primary=blue, warning=yellow danger=red */}
                                                                Download
                                                            </MDBBtn>
                                                        </td>
                                                        <td >
                                                            <MDBBtn size='sm' color='success' className='mx-2'  onClick={()=>
                                                                {
                                                                    claim.claimApproved = true
                                                                    claim.closed = true

                                                                    updatePolicyHolder(policyHolder, vehicle, claim)
                                                                }}> {/* colors= success=green, primary=blue, warning=yellow danger=red */}
                                                                Approve
                                                            </MDBBtn>
                                                        </td>
                                                        <td >
                                                            <MDBBtn size='sm' color='danger' className='mx-2'  onClick={()=>
                                                                {
                                                                    claim.claimApproved = false
                                                                    claim.closed = true

                                                                    updatePolicyHolder(policyHolder, vehicle, claim)
                                                                }}> {/* colors= success=green, primary=blue, warning=yellow danger=red */}
                                                                Deny
                                                            </MDBBtn>
                                                        </td>
                                                    </tr> 
                                                )
                                            }
                                            else{return('')}
                                        }
                                    )
                                )                               
                            }
                        ))
                    }
                )
            }
                </MDBTableBody>
            </MDBTable>                                                                         

        </div>
    )
}

export default ActiveClaims