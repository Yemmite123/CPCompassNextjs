import React, { Component } from "react";
import { MDBTabPane, MDBTabContent } from "mdbreact";
import Link from 'next/link';

class MeetCompass extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };
  render() {
    return (
        <div>
        <div className="container-fluid">
             <div id="margin_space2" className="row" 
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
             >
             <div className="meetComp_section">
                <h1>Meet Compass</h1>
                <p>An app built to suit your lifestyle, specially designed for you! Features to help you hit your short or long term goals.</p>
            </div>
                 <div className="col-md-7 line_left">
                    <div className="meetComp_tabs">
                      <div className={ this.state.activeItem === "1" ? 'tab_active_now': '' }>
                        <span></span>
                        <h1><a className="tabs_restyle" link to="#"  active={this.state.activeItem === "1" } onClick={this.toggle("1")} role="tab" >Termed Investments <span role="img" aria-label="Investments">🍀 </span></a></h1>
                        <p>Reach your goals from owning a home, going on holiday, or invest in your retirement fund.</p>
                      </div>
                      <div className={ this.state.activeItem === "2" ? 'tab_active_now': '' }>
                        <span></span>
                        <h1> <a className="tabs_restyle" link to="#" active={this.state.activeItem === "2" } onClick={this.toggle("2")} role="tab" >Investment Calculator  <span role="img" aria-label="Calculator">⚖️</span></a></h1>
                        <p>Understand your returns from various investment options.</p>
                      </div>
                      <div className={ this.state.activeItem === "3" ? 'tab_active_now': '' }>
                        <span></span>
                        <h1><a className="tabs_restyle" link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >Financial Instruments  <span role="img" aria-label="Financial">💸</span></a></h1>
                        <p>Invest in Treasury Bills, FGN Bonds and Eurobonds and other instrument</p>
                      </div>
                      <div className={ this.state.activeItem === "4" ? 'tab_active_now': '' }>
                        <span></span>
                        <h1><a className="tabs_restyle" link to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >Join a tribe <span role="img" aria-label="tribe">🤝</span></a></h1>
                        <p>Join a group of like minded individuals with similar investment goals and lifestyles</p>
                      </div>
                      <div className={ this.state.activeItem === "5" ? 'tab_active_now': '' }>
                        <span></span>
                        <h1><a className="tabs_restyle" link to="#" active={this.state.activeItem === "5"} onClick={this.toggle("5")} role="tab" >Multi-currency Wallet  <span role="img" aria-label="Wallet">💵 💷</span></a></h1>
                        <p>Investing Naira and USD. Build a multi-currency portfolio.</p>
                      </div>
                      <div className={ this.state.activeItem === "6" ? 'tab_active_now': '' }>
                         <span></span>
                        <h1><a className="tabs_restyle" link to="#" active={this.state.activeItem === "6"} onClick={this.toggle("6")} role="tab" >Portfolio <span role="img" aria-label="Portfolio">💰</span></a></h1>
                        <p>Monitor your net worth increase directly from your phone, laptop or tablet.</p>
                      </div>
                    </div>
                    <br/>
                    <Link href='http://app.dev.cpinvest.s3-website-us-east-1.amazonaws.com/register/signup'>
                      <button className="sign_up">Sign up for free</button>
                    </Link>
                 </div>
                 <div className="col-md-5">
                   <div className="meetComp_tabs_img">
                      <MDBTabContent activeItem={this.state.activeItem} >
                      <MDBTabPane tabId="1" role="tabpanel">
                          <img src="images/Termed Investments.svg" alt="Termed Investments"/>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel"> 
                          <img src="images/Investment Calculator.svg" alt="Investment Calculator"/>
                          </MDBTabPane>
                          <MDBTabPane tabId="3" role="tabpanel">
                          <img src="images/Financial Instruments.svg" alt="Financial Instruments"/>
                        </MDBTabPane>
                        <MDBTabPane tabId="4" role="tabpanel">
                          <img src="images/Join a tribe.svg" alt="Financial Instruments"/>
                        </MDBTabPane>
                        <MDBTabPane tabId="5" role="tabpanel">
                          <img src="images/Multi-currency Wallet.svg" alt="Financial Instruments"/>
                        </MDBTabPane>
                        <MDBTabPane tabId="6" role="tabpanel">
                          <img src="images/Portfolio1.svg" alt="Financial Instruments"/>
                        </MDBTabPane>
                        </MDBTabContent>
                   </div>
                 </div>
             </div>
         </div>
     </div>
    );
  }
}

export default MeetCompass;
