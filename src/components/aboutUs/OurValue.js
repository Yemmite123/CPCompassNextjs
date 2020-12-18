import React from 'react'


const OurValue = () => {
    return (
        <div>
            <div id="our_values" class="container-fluid">
                <div  class="row">
                    <div class="col-md-12"  
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="text-center our_values_section">
                           <h1>Our Values</h1>
                           <p>Our Values are not words spoken, but a set of guides, a moral compass to organize our behaviours and actions to all stakeholders. We have fortified our values by making commitments to critical service touch points, identifying possible service defaults, and designing pre-emptive and preventive solutions around them.</p>
                        </div>
                    </div>
                </div>
                <div class="container mobile_spacing">
                <div id="spacing" class="row"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <div class="col-md-3">
                        <div className="retan"> 
                          <img src="images/Knowledge.svg" alt=""/>
                           <h1>Knowledge</h1>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="retan"> 
                          <img src="images/Innovation.svg" alt=""/>
                           <h1>Innovation</h1>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="retan"> 
                          <img src="images/Excellence.svg" alt=""/>
                           <h1>Excellence</h1>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="retan"> 
                          <img src="images/Integrity.svg" alt=""/>
                           <h1>Integrity</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurValue
