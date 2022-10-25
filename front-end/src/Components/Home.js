import React from "react"
import { MDBCarousel, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, 
    MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter } from 'mdb-react-ui-kit';

function Home ()
{   
    return (
        <div>
            <div className='justify-content-center top-padding-30'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='sm' />
                    <MDBCol size='md-10'>
                        <MDBCarousel showControls fade className='shadowbox-sm'>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src='https://mdbootstrap.com/img/new/slides/041.jpg'
                                alt='...'>
                                <div>
                                    <h5 className='txt-shadow'>SomeCorp News</h5>
                                    <p className="txt-shadow">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>                                
                        </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src='https://mdbootstrap.com/img/new/slides/042.jpg'
                                alt='...'>
                                    <div>
                                        <h5 className='txt-shadow'>More SomeCorp News</h5>
                                        <p className='txt-shadow'>Et labore reprehenderit anim labore consequat est adipisicing.</p>
                                    </div>                                
                            </MDBCarouselItem>

                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src='https://mdbootstrap.com/img/new/slides/043.jpg'
                                alt='...'>
                                    <div>
                                        <h5 className='txt-shadow'>Even More SomeCorp News</h5>
                                        <p className='txt-shadow'>Ex consectetur anim magna ea velit velit.</p>
                                    </div>                                
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </MDBCol>
                    <MDBCol size='sm' />
                </MDBRow>
                <MDBRow className='row-cols-1 rows-cols-md-3 g-4 justify-content-center'>
                    <MDBCol className='cards'>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                alt='...'
                                position='top' />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    Pariatur et culpa ea minim
                                </MDBCardTitle>
                                <MDBCardText>
                                    Amet ullamco consequat nisi sunt nostrud sit adipisicing esse incididunt. 
                                    Laboris consequat laborum aliquip nisi officia. Amet cillum ex aliqua.
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='cards'>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                alt='...'
                                position='top' />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    Incididunt non tempor
                                </MDBCardTitle>
                                <MDBCardText>
                                    Lorem mollit Lorem et enim ullamco cillum. Pariatur enim duis ullamco fugiat id. 
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 30 mins ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='cards'>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                alt='...'
                                position='top' />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    Dolor amet
                                </MDBCardTitle>
                                <MDBCardText>
                                    Lorem mollit ut ut adipisicing laboris eiusmod sunt aute sit exercitation in deserunt elit. 
                                    Do exercitation exercitation pariatur non consectetur non anim cillum ad esse. Voluptate sunt sit sint officia dolor ad eu et esse pariatur. 
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'>Last updated 3 hours ago</small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>            
        </div>
    )    
};

export default Home