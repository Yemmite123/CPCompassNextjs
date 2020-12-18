import React, { useState } from 'react';
import { MDBNavLink } from "mdbreact";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();
    return (
      <div className="container-fluid">
        <div id="margin_space" className="row">
          <div className="col-md-12">
          <MDBNavbar data-aos="zoom-in"expand="md">
          <MDBNavbarBrand>
          <Link href='/'>
             <img className='nav-link' id="nav_link" src="images/compasstransparentblue (1)logo.svg" alt="Compass"/>
          </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggle}/>
          <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem className={router.pathname == "/about" ? "menu_main_active" : ""}>
                <Link href='/about'>
                <a className='nav-link'>About</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem className={router.pathname == "/contact" ? "menu_main_active" : ""}>
                <Link href='/contact'>
                <a className='nav-link'>Contact</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem className={router.pathname == "/faqs" ? "menu_main_active" : ""}>
                <Link href='/faqs'>
                <a className='nav-link'>FAQs</a>
                </Link>
              </MDBNavItem>
              <MDBNavItem className={router.pathname == "/termsAndConditions" ? "menu_main_active" : ""}>
                <Link href='/termsAndConditions'>
                <a className='nav-link'>Legal</a>
                </Link>
              </MDBNavItem>
             
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
            <Link href='http://app.dev.cpinvest.s3-website-us-east-1.amazonaws.com/login'>
            <a><button className="nav-link sign_in">Sign in</button></a>
            </Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link href='http://app.dev.cpinvest.s3-website-us-east-1.amazonaws.com/register/signup'>
            <a><button className="sign_up">Sign up for free</button></a>
            </Link>
            </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
       </div>
          
      </div>
      </div>
    )
}



export default Footer

