import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div id="margin_space_about" class="container-fluid">
                <div class="row"
                data-aos="fade-down"
                data-aos-duration="3000"
                >
                    <div class="col-md-6">
                        <div className="about_section">
                            <h1>ABOUT US</h1>
                            <p>We are Comercio Partners; an Investment Firm 
                            focused on Trading Fixed Income Securities and Equities, 
                            providing Financial Advisory and Asset Management services to
                            domestic and international investors in the Sub-Saharan African Capital Market.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="about_section_img">
                            <img src="images/about.svg" alt="about us"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
