import React, { Component } from 'react'
import SideBar from './SideBar'

export class WebDisclaimer extends Component {
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
                            <h1>Web Disclaimer</h1>
                            <h2>Last updated: June 25, 2020</h2>
                            <p>Please read these terms and conditions carefully before using our service.</p>
                            <hr/>
                          </div>

                         <div className="tandc_sub_heading">
                             <h1>Interpretation and Definitions</h1>
                             <h2>Interpretations</h2>
                             <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
                              <p>The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                              <h2>Definitions</h2>
                              <p>For the purposes of these Disclaimer:</p>
                              
                              <ul>
                              <li><p>Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Comercio Partners Ltd , 10b layi yusuf crescent, off admiralty way.</p></li>
                                <li><p> You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
                                <li><p>Website refers to www.comerciopartners.com (Tribes by Comercio Partners).</p></li>
                                <li><p>Application means the software program provided by the Company downloaded by You on any electronic device named Tribes by Comercio Partners.</p></li>
                                <li><p>Service refers to the Website or the Application or both.</p></li>
                              </ul>
                              
                              <hr/>
                            
                              <h2>Disclaimer</h2>
                              <p> The information contained on the Service is for general information purposes only.</p>
                              <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
                              <p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer is maintained by the Disclaimer Generator</p>
                              <p>The Company does not warrant that the Service is free of viruses or other harmful components.</p>
                              <hr/>
                              <h2>External Links Disclaimer</h2>
                              <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p> 
                              <p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites</p>
                              
                              <hr/>
                              <h2>Fair Use Disclaimer</h2>
                              <p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
                              <p>The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
                              <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>
                              
                              <hr/>
                              <h2>Views Expressed Disclaimer</h2>
                              <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</p>
                              <p>TComments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.</p>T
                             <hr/>
                             <h2>"Use at Your Own Risk" Disclaimer</h2>
                             <p>All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
                             <p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
                           
                             <hr/>
                             <h2>Contact Us</h2>
                             <p>If you have any questions about this Cookies Policy, You can contact us by email: <a href="mailto:info@comerciopartners.com">info@comerciopartners.com</a></p>
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

export default WebDisclaimer
