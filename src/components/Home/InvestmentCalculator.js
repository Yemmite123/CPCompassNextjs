import React, { Component } from 'react'
import moment from 'moment';
// import axios from 'axios';
import Swal from 'sweetalert2'
import Link from 'next/link';

export class InvestmentCalculator extends Component {
    constructor(){
        super();
        this.state=
        { 
            targetAmount:'', 
            startDate:'', 
            endDate:'', 
            frequency:'', 
            getResult: '',
            isLoggedIn: false
            
         }
         this.handleClick = this.handleClick.bind(this);
        }
        handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
        
        }
        handleSubmit = event =>{
        event.preventDefault();
        if(this.state.targetAmount === '' || this.state.startDate === '' || this.state.endDate === '' || this.state.frequency === '' ){
           Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'All fields are required',
            showConfirmButton: true,
          });
        }
        else{
            const url ="https://dev.api.cpcompass.ng/investments/calculator"
            const data = { targetAmount:this.state.targetAmount, startDate:this.state.startDate, endDate:this.state.endDate, frequency:this.state.frequency }
            fetch(url, { method: 'POST', 
            body: JSON.stringify(data), 
            headers:{ 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if(response.success === false){
                    console.log( response.error[0].message);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: response.error[0].message,
                        showConfirmButton: true,
                    })
                }else{
                    this.setState({
                        getResult: response,
                        endDate:response.data.endDate,
                        expectedTotalReturns:response.data.expectedTotalReturns,
                        frequency:response.data.frequency,
                        installment:response.data.installment,
                        interest:response.data.interest,
                        targetAmount:response.data.targetAmount,
                        isLoggedIn:true
                    });
                }

            }
            ); 
        }
    }
    handleClick() {
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn 
        }));
    }
    render() {
        const convertDate = (date) => {
            return moment(date).format("DD MMMM YYYY");
        };
        const formatCurrency = (amount) => {
            return Number(amount)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        };
        return (
            <div>
                <div className="container-fluid">
                    <div id="margin_space2" 
                        className="row investment_calculator"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <div className="col-md-6">
                           <div className="investment_calculator_goal">
                                <h1>What’s your <span>goal?</span></h1>
                                <p>Let’s calculate the returns on your investment for any of your short term or long term goals.</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                        {this.state.isLoggedIn 
        
                           ? <div>
                                <div className="estimated">
                                    <h1 className="text-center">Estimated Returns</h1>
                                    <p className="text-justify">
                                        With an interest rate of <b> {this.state.interest}%,</b> you would have to deposit
                                        <b> ₦{formatCurrency(this.state.targetAmount)} </b> every { this.state.frequency} to meet your target of 
                                        <b> ₦{formatCurrency(this.state.targetAmount) } </b> by 
                                        <b> {convertDate(this.state.endDate)} </b>
                                    </p>
                                    <div>
                                    <span className="review" onClick={this.handleClick}>Review Your calculations</span>
                                    <span>
                                        <Link href='http://app.dev.cpinvest.s3-website-us-east-1.amazonaws.com/register/signup'>
                                            <button className="sign_up">Start Investment</button>
                                        </Link>
                                    </span>
                                    </div>
                                </div>
                            </div>
                             
                           : <div className="investment_calculator_form">
                               <form onSubmit={this.handleSubmit}> 
                                    <div id="calculator_form" className="row">
                                        <div className="col-md-5">
                                           <div className="calculator_input">
                                                <label>Start date</label>
                                                <input 
                                                    type="date" 
                                                    id="endDate" 
                                                    name="startDate" 
                                                    value={this.state.startDate}
                                                    onChange={this.handleChange}  
                                                    className="form-control"  
                                                    min={moment().format("YYYY-MM-DD")}
                                                    required
                                                />
                                           </div>
                                        </div>
                                        <div className="col-md-1">
                                         <div className="form_icon" > <img src="images/interface 2.svg" alt="interface"/></div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="calculator_input">
                                                <label>End date</label>
                                                <input 
                                                    type="date" 
                                                    id="endDate" 
                                                    name="endDate" 
                                                    value={this.state.endDate}
                                                    onChange={this.handleChange}  
                                                    className="form-control"  
                                                    min={moment().format("YYYY-MM-DD")}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                         
                                        </div>
                                    </div>
                                    <div id="calculator_form" className="row">
                                        <div className="col-md-12">
                                           <div className="calculator_input2">
                                                <label>Target amount</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="targetAmount" 
                                                        value={this.state.targetAmount}
                                                        onChange={this.handleChange} 
                                                        placeholder="₦"
                                                        required
                                                    />
                                           </div>
                                        </div>
                                    </div>
                                    <div id="calculator_form" className="row">
                                        <div className="col-md-12">
                                           <div className="calculator_input2">
                                                <label>Payment frequency</label>
                                                <select 
                                                    name="frequency" 
                                                    value={this.state.frequency}
                                                    onChange={this.handleChange} 
                                                    className="form-control"
                                                    required
                                                >
                                                <option value="">Choose frequency</option>
                                                <option value="daily">Daily</option>
                                                <option value="weekly">Weekly</option>
                                                <option value="monthly">Monthly</option>
                                                <option value="quarterly">Quarterly</option>
                                                <option value="bi-annually">Bi-Annually</option>
                                                <option value="annually">Annually</option>
                                                </select>
                                           </div>
                                        </div>
                                    </div>

                                    <div id="calculator_form" className="row">
                                        <div className="col-md-12">
                                           <div className="calculator_input2">
                                               <button className="calculator_btn">Calculate your returns</button>
                                           </div>
                                        </div>
                                    </div>
                               </form>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InvestmentCalculator
