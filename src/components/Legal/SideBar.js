import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
    

const SideBar = () => {
    const router = useRouter();
    return (
        <div>
            <div className="tandc_legal">
                <h1>LEGAL</h1>
                <ul className="list-unstyled">
                    <li className={router.pathname == "/termsAndConditions" ? "sidebar_main_active" : ""}><Link href='/termsAndConditions'><a className='nav-link' exact activeClassName="sidebar_main_active" > <span><img src="images/lock-4.svg" alt="lock"/> </span> Terms and Conditions</a></Link></li>
                    <li className={router.pathname == "/webDisclaimer" ? "sidebar_main_active" : ""}><Link href='/webDisclaimer'><a className='nav-link' exact activeClassName="sidebar_main_active"> <span><img src="images/disclaimer.svg" alt="lock"/> </span> Website Disclaimer</a></Link></li>
                    <li className={router.pathname == "/cookiesPolicy" ? "sidebar_main_active" : ""}><Link href='/cookiesPolicy'><a className='nav-link' exact activeClassName="sidebar_main_active"> <span><img src="images/eye.svg" alt="lock"/></span> Cookies Policy</a></Link></li>
                    <li className={router.pathname == "/AMLPolicy" ? "sidebar_main_active" : ""}><Link href='/AMLPolicy'><a className='nav-link' exact activeClassName="sidebar_main_active"> <span><img src="images/note.svg" alt="lock"/></span> AML Policy</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
