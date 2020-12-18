import React from 'react'
import AppDownlod from '../AppDownlod'
// import AppDownlod from '../AppDownlod'

const AboutOtherContent = () => {
    return (
        <div>
            <div class="container-fluid parallax">
            <div id="margin_space3" class="row" 
                  data-aos="fade-left"
                  data-aos-duration="3000">
                <div class="col-md-6">
                    <div className="other_content">
                        <h1>Trading</h1>
                        <p>We trade principal funds and execute mandates on behalf of our clients on various financial market products. At Comercio Partners, we take into consideration your specific needs and execute your transactions based on our professional knowledge of the global markets. We analyze the economic environment and investment climate, with a focus on the region involved and the timing of the investment, before making our recommendations. </p>
                        <p>Our interest rate forecasts, and our assessment of the Fixed Income markets are based on the analysis of fundamental factors and many years of market experience. Our major focus is on proprietary Trading, Flow business and Derivatives.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="other_content_img">
                        <img src="images/Trading.svg" alt=""/>
                    </div>
                </div>
            </div>

            


            <div id="margin_space3" class="row" 
                data-aos="fade-left"
                data-aos-duration="3000">
                <div class="col-md-6">
                    <div id="add_space" className="other_content">
                        <h1>Investments</h1>
                        <h2>Asset Management</h2>
                        <p>We are duly licensed as a portfolio manager by The Securities and Exchange Commission Nigeria (SEC) to offer asset management services including attractive investment and switch proposals by investing third party funds into different asset classes across Africa, to ensure good returns for our clients, in the corporate and retail sectors. There will be different portfolios to cater for the risk appetite of our diverse client base. </p>
                        <h2>Principal Investments</h2>
                        <p>We nurture strategic intent to incubate and provide growth capital for start-ups, greenfield projects and innovative ideas that provide unique products and solutions with favourable fundamental characteristics.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="other_content_img">
                        <img src="images/Investments.svg" alt=""/>
                    </div>
                </div>
            </div>







            <div id="margin_space3" class="row"
                 data-aos="fade-left"
                 data-aos-duration="3000"
                >
                <div class="col-md-6">
                    <div className="other_content">
                        <h1>Advisory</h1>
                        <p>Our knowledge of the Nigeria and Africa’s financial market at large, is built on years of practical experience working on various listings and capital raising assignments. Beyond the organized exchanges and depending on the needs of our clients, our equity & debt capital market solutions, merger & acquisition & financial advisory capabilities are tailor-made for each client’s need. </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="other_content_img">
                        <img src="images/Advisory.svg" alt=""/>
                    </div>
                </div>
            </div>



            <div id="margin_space3" class="row"
                data-aos="fade-left"
                data-aos-duration="3000"
            >
                <div class="col-md-6">
                    <div className="other_content">
                        <h1>Real Estate Advisory</h1>
                        <p>We provide real estate advisory, portfolio management & property development to our clients by  connecting clients to key stakeholders across the value chain by leveraging our industry relationships for clients and key anchor tenants, providing clients with leading risk mitigation services, and our deep knowledge of the development value chain from ideation to exit. </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="other_content_img">
                        <img src="images/Real Estate Advisory.svg" alt=""/>
                    </div>
                </div>
            </div>
            </div>
            <AppDownlod/>
            
        </div>
    )
}

export default AboutOtherContent
