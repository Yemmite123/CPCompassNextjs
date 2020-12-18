import React from 'react'

const AppDownlod = () => {
    return (
        <div>
           <div id="app_download" className="container-fluid">
                <div id="margin_space2" className="row" 
                    data-aos="fade-right"
                    data-aos-duration="3000"
                >
                    <div className="col-md-6">
                        <div className="app_download_img">
                            <img src="images/hand_phone.png" height="510"  alt="app"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="app_download_section">
                            <h1>Join our large tribe of <span className="corver_border">Investors</span></h1>
                            <img src="images/Vector_curve.svg" alt="Vector_curve.svg"/>
                            <p>An app built to suit your lifestyle, specially designed for you! Features to help you hit your short or long term goals.</p>
                           <span className="google_play2"><img src="images/google-play.svg" alt="google-play"/></span>
                           <span className="app_store2"><img src="images/app-store.svg" alt="app_store"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownlod
