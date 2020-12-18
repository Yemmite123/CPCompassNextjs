import React from 'react'

const  Autopilot = () => {
    return (
        <div>
           <div id="section_color" className="container-fluid">
                <div id="margin_space2" className="row" 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <div className="col-md-6">
                      <div className="autopilot_spacing autopilot_img">
                          <img src="images/autopilot.svg" alt="autopilot"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <div className="autopilot_spacing autopilot_section">
                          <h1>Build your wealth on autopilot.</h1>
                          <p>Our investment advisory service incorporates all aspects of financial planning, portfolio management, and other aggregated financial services to help you actualize your financial goals.</p>
                          <div className="autopilot_list_items">
                              <h1><span><img src="images/user.svg" alt="user"/></span> <bulb>Personlized</bulb></h1>
                              <p>Tailored investments to suit short-term, medium-term or long-term investing to reach financial goals.</p>
                              <h1><span><img src="images/users.svg" alt="user"/></span><bulb>Diversified</bulb></h1>
                              <p>Tailored investments to suit short-term, medium-term or long-term investing to reach financial goals.</p>
                              <h1><span><img src="images/star.svg" alt="user"/></span><bulb>Competitive</bulb></h1>
                              <p>Perfect for frequent investors who want additional control on managing their portfolio. </p>
                          </div>
                        </div> 
                    </div> 
                </div>
           </div>
        </div>
    )
}

export default  Autopilot
