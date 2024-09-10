import React from 'react';

import {
  MDBFooter,MDBContainer,MDBIcon, MDBInput, MDBCol, MDBRow, MDBBtn} from 'mdb-react-ui-kit';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faGithub,faFacebook,faGoogle,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
  
const Footer=()=>{
    return(
        <>

    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faGoogle} size="2x" />
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faInstagram } size="2x" />
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <FontAwesomeIcon icon={faGithub} size="2x" />
           <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Market research: Understand the market and your target customers. For example, in India, consumers value quality, comfort, and durability. You can use Google Trends to find out who's looking for products similar to yours. 

          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Find a Store </h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                     Footflair
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                        what now
                  </a>
                </li>
            
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Our Story  </h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Annual Return Report
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  News & Events
                  </a>
                </li>
             
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Customer Service              </h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Feedback 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
             
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Customer Policy    </h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Terms and Conditions

                  </a>
                </li>
             
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
            FOOTFLAIR.com
        </a>
      </div>
    </MDBFooter>

        </>
    )
}


export default Footer