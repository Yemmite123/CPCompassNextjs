import React, { Component } from 'react'
import SideBar from './SideBar'

export class AMLPolicy extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid parallax2">
                    <div id="margin_space_tandc" className="row">
                        <div className="col-md-4">
                        <SideBar/>
                        </div>
                        <div className="col-md-8">
                          <div className="tandc_heading">
                            <h1>Anti-Money Laundering (AML) Policy</h1>
                            <h2>Last updated: June 25, 2020</h2>
                            {/* <p>Please read these terms and conditions carefully before using our service.</p> */}
                            <hr/>
                          </div>

                         <div className="tandc_sub_heading">
                             <h1>What is Money Laundering?</h1>
                             <h2>Interpretations</h2>
                             <p>Money laundering is the act of concealing money obtained via illegal means, so that the source appears to be legitimate. We adhere strictly to anti-money laundering laws, rendering it illegal for any of our employees or agents to knowingly engage in or attempt to engage in any activity(ies) remotely related to money laundering.</p> 
                             <p> Our anti-money laundering policies increase investors protection and client’s security services, as well as offer safe payment processes.</p> 
                              <h2>Identification</h2>
                              <p>The first safeguard against money laundering is our Know-Your-Client (KYC) verification.</p>
                              <p>To ensure compliance with standard AML regulations, we require you to submit the following documentation:</p>
                             
                              <ul>
                                  <li><p>Proof of Identification: A clear copy of the front and back of your government-issued photo ID, i.e. a valid international passport, driver’s licence, or national ID card.</p></li>
    
                                  <li><p>Proof of Residence: An official document issued within the last 3 months, clearly stating your name and address as registered with CP INVEST. This can be a utility bill (i.e. water, electric, or landline), or bank statement. Please make sure your copy includes:</p></li>
                                  
                                      <ul className="aml_list">
                                      <li><p>Your full, legal name</p></li>
                                      <li><p>Your full residential address</p></li>
                                      <li><p>Date of issue (within the last 3 months)</p></li>
                                      <li><p>Name of the issuing authority with an official logo or stam</p></li>
                                      </ul>
                                 
                              </ul>
                           
                              
                              
                              <hr/>
                            
                              <h2>Monitoring</h2>
                              <p>We do not accept third-party payments. All deposits must be made in your name and match the KYC documents submitted to CPINVEST. Also, to ensure compliance with AML regulatory policies, all funds withdrawn will be returned to the exact source/account details from which they were received.</p>
                              <hr/>
                              <h2>Reporting</h2>
                             <p> AML regulation requires us to monitor, track and report transactions deemed as suspicious to the relevant law enforcement agency(ies). We also reserve the right to deny a transfer at any stage if we believe the transfer is connected in any manner to criminal activity or money laundering. The law prohibits us from informing customers about reports submitted to law enforcement agencies concerning suspicious activity.</p>
                             <p> If you have any enquiries, please contact us via email: <a href="mailto:info@comerciopartners.com">info@comerciopartners.com</a></p>
                             
                         </div>
                        </div>
                        {/* <div className="col-md-2">
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AMLPolicy
