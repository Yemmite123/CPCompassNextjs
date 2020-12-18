import React from 'react'
import { MDBNavLink } from "mdbreact";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
    return (
        <div>
            <footer>
             <div className="container-fluid">
                <div id="margin_space2" className="row">
                    <div className="col-md-3">
                      <div className="footer_section">
                        <h5 className="mt-3 mb-4">Product</h5>
                            <ul className="list-unstyled">
                            <li className={router.pathname == "/" ? "menu_main_active" : ""}>
                              <Link href='/'>
                                <a className='nav-link'>Home</a>
                             </Link>
                            </li>
                            <li className={router.pathname == "/about" ? "menu_main_active" : ""}>
                            <Link href='/about'>
                                 <a className='nav-link'>About</a>
                            </Link>
                            </li>
                            <li className={router.pathname == "/contact" ? "menu_main_active" : ""}>
                              <Link href='/contact'>
                                  <a className='nav-link'>Contact</a>
                               </Link>
                            </li>
                            </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_section">
                            <h5 className="mt-3 mb-4">Resources</h5>
                                <ul className="list-unstyled">
                                <li className={router.pathname == "/faqs" ? "menu_main_active" : ""}>
                                   <Link href='/faqs'>
                                     <a className='nav-link'>FAQs</a>
                                   </Link>
                                </li>
                                <li className={router.pathname == "/" ? "menu_main_active" : ""}>
                                  <Link href='/'>
                                    <a className='nav-link'>Blog</a>
                                  </Link>
                                </li>
                                <li className={router.pathname == "/" ? "menu_main_active" : ""}>
                                  <Link href='/'>
                                    <a className='nav-link'>Investment Calculator</a>
                                  </Link>
                                </li>
                                
                                </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer_section">
                          <h5 className="mt-3 mb-4">Legal</h5>
                            <ul className="list-unstyled">
                            <li className={router.pathname == "/termsAndConditions" ? "menu_main_active" : ""}>
                                <Link href='/termsAndConditions'>
                                  <a className='nav-link'>Terms and Conditions</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/cookiesPolicy" ? "menu_main_active" : ""}>
                               <Link href='/cookiesPolicy'>
                                  <a className='nav-link' >Cookies Policy</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/AMLPolicy" ? "menu_main_active" : ""}>
                                <Link href='/AMLPolicy'>
                                 <a className='nav-link'>AML Policy</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/webDisclaimer" ? "menu_main_active" : ""}>
                                <Link href='/webDisclaimer'>
                                 <a className='nav-link'>Website Disclaimer</a>
                               </Link>
                            </li>
                            </ul>
                        </div>
                    
                    </div>
                    <div className="col-md-3">
                    <div className="footer_section">
                        <h5 className="mt-3 mb-4">Contact</h5>
                        <p>10B Layi Yusuf Crescent, Off Admiralty Way,  Lekki Phase 1, Lagos, Nigeria.</p>
                            <ul className="list-unstyled">
                            <li>
                                <Link href='/'>
                                   <a className='nav-link' href="#/">info@comerciopartners.com</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                   <a  href="#/">+234 (0) 1 712 0263</a>
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="footer_space" className="row">
                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-md-left">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                            <a  href="https://www.facebook.com/ComercioPartners/" rel="noopener noreferrer" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 facebook.svg" alt="facebook"/>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://www.instagram.com/comerciopartners/" rel="noopener noreferrer" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                              <img src="images/icons8-instagram (1).svg" alt="instagram"/>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a  href="https://ng.linkedin.com/company/comercio-partners" rel="noopener noreferrer" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 linkedin.svg" alt="linkedin"/>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a  href="https://twitter.com/comerciopartner?lang=en" rel="noopener noreferrer" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                <img src="images/icons8 twitter.svg" alt="twitter"/>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8 Copyright">
                        <p className="text-md-right">&copy; {new Date().getFullYear()} Copyright <a href="https://www.comerciopartners.com/" rel="noopener noreferrer" target="_blank">Comercio Partners </a>|| Designed & Developed By 
                        <a href="http://thebulb.africa/" rel="noopener noreferrer" target="_blank">
                            <strong> Thebulb.africa</strong>
                        </a>
                        </p>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}



export default Footer

