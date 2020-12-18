import React, { Component } from 'react'
import {
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBIcon,
  } from 'mdbreact';
  import axios from 'axios';


export class QuestionsandAnswers extends Component {
    constructor(){
        super();
    
        this.state={
          search: '',
          collapseID: false,
          persons: [],
        };
      }
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
    
    // state = {
    //     collapseID: false,
    //     persons: [],
    //   };
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

        componentDidMount() {
            axios.get(`https://dev.api.cpcompass.ng/faq`)
              .then(res => {
                const persons = res.data.data.faq;
               // console.log(persons);
               this.setState({ persons });
              });
          }
    
    render() {
            console.log(this.state.search);
            let filteredFAQs = this.state.persons.filter(
                (persons) => {
                    return persons.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
     
        return (
            <div>
                
                <div className="container-fluid faq">
                    <div id="margin_space3" className="row"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        
                        <div className="col-md-12">
                            <div className="text-center questions">
                              <h1>Got questions? we’ve got answers</h1>
                                <div className="buttonIn"> 
                                    <input className="form-control" type="text" id="enter" onChange={(e)=>this.searchSpace(e)}   placeholder="Search for answers"/> 
                                    <button id="clear">Search</button> 
                                  </div> 
                            </div>
                            
                        </div>
                 
                    </div>
                </div>



                <div className="container-fluid">
                    <div id="margin_space3" className="row">
                        <div className="col-md-12">
                            <div className="accordion_balancing">
                            { filteredFAQs.map(person =>
                                <MDBCard id="accordion_card" key={person.id} >  
                                    <MDBCardHeader id={this.state.collapseID === 'collapse' + person.id ? 'your_className': null}
                                    onClick={this.toggleCollapse('collapse'+person.id)}
                                    className="accordion_faq"
                                    >
                                     <h1>
                                         {person.title}
                                    <MDBIcon
                                        icon={
                                        this.state.collapseID === 'collapse' + person.id
                                            ? 'minus'
                                            : 'plus'
                                        }
                                        className='float-right'
                                        size='1x'
                                    />
                                    </h1>
                                    </MDBCardHeader>

                                    <MDBCollapse id={'collapse' + person.id} isOpen={this.state.collapseID}>
                                    <MDBCardBody className='pt-0'>
                                    <br/>
                                        <p className="accordion_faq_para">{person.content}</p>
                                    </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                                 )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default QuestionsandAnswers
