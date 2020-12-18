import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";

const Carousel = () => {
    return (
        <div>
            <div  className="container-fluid">
                <div className="row">
                    <div style={{'margin':'0px', 'padding':'0px'}} className="col-md-12">
                    <MDBCarousel 
                        activeItem={1}
                        length={4}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                        >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                className="d-block w-100"
                                src="images/compass1.png"
                                alt="First slide"
                                />
                            <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption className="caption_style">
                                <h3 className="h3-responsive">Live life the way you want.</h3>
                                <p>Meet your financial targets, invest, and join a tribe of investors who are on their way to financial freedom.</p>
                                <span className="google_play"><img src="images/google-play.svg" alt="google-play"/></span>
                                <span className="app_store"><img src="images/app-store.svg" alt="app_store"/></span>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                className="d-block w-100"
                                src="images/compass2.png"
                                alt="Second slide"
                                />
                            <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption className="caption_style">
                                <h3 className="h3-responsive">Live life the way you want.</h3>
                                <p>Meet your financial targets, invest, and join a tribe of investors who are on their way to financial freedom.</p>
                                <span className="google_play"><img src="images/google-play.svg" alt="google"/></span>
                                <span className="app_store"><img src="images/app-store.svg" alt="app"/></span>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                className="d-block w-100"
                                src="images/compass3.png"
                                alt="Third slide"
                                />
                            <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption className="caption_style">
                                <h3 className="h3-responsive">Live life the way you want.</h3>
                                <p>Meet your financial targets, invest, and join a tribe of investors who are on their way to financial freedom.</p>
                                <span className="google_play"><img src="images/google-play.svg" alt="google1"/></span>
                                <span className="app_store"><img src="images/app-store.svg" alt="app_store"/></span>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img
                                className="d-block w-100"
                                src="images/Group 8813.svg"
                                alt="Fourth slide"
                                />
                            <MDBMask overlay="" />
                            </MDBView>
                            <MDBCarouselCaption className="caption_style1">
                                <h3 className="h3-responsive">Live life the way you want.</h3>
                                <p>Meet your financial targets, invest, and join a tribe of investors who are on their way to financial freedom.</p>
                                <span className="google_play"><img src="images/google-play.svg" alt="play"/></span>
                                <span className="app_store"><img src="images/app-store.svg" alt="store"/></span>
                            </MDBCarouselCaption>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                        </MDBCarousel>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Carousel
