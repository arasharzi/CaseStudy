import React, { useState } from "react"
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol } from 'mdb-react-ui-kit'


function Claim ()
{   
    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value: string) => 
    {
      if (value === verticalActive) 
      {
        return;
      }  
      setVerticalActive(value);
    }


    return (
        <div className='top-padding-30'>
            <MDBRow  className='width-max'>
                <MDBCol size='2'>
                    <MDBTabs className='flex-column text-center'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                Active Claims
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                New Claim
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                                Search
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCol>
                <MDBCol size='9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={verticalActive === 'tab1'}>
                            <h1>Claims Placeholder</h1>
                            <p>
                                search through claims? bring up info about the claim the files associated with the claim
                                then be able to approve or deny the claim? 
                                <p>
                                    maybe this should have a table of all active claims the policy holder and vehicle associated with that claim?
                                    <p>
                                        adding a new claim should maybe be in the policy holders location?
                                    </p>
                                </p>                  
                            </p>
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab2'}>
                            Profile content
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab3'}>
                            Messages content
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </div>       
    )    
};

export default Claim