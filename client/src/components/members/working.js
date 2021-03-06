import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMembers } from "../../actions";
import "./working.css";
import amiya from "../../../src/resources/amiya.jpg";
import Reetamoni from "../../../src/resources/reetamoni.jpg";
import sd from "../../../src/resources/sd.jpg";
import ds from "../../../src/resources/ds.jpg";
import apurba from "../../../src/resources/apurba.jpg";
import adittya from "../../resources/ad.jpg";
import abhinav from "../../resources/aa.jpg";
import rkv from "../../resources/rkv.jpg";
import subhasish from "../../resources/sg.jpg";
class Members extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getMembers());
  }
  showMembers = member => 
 
   member.list && member.list.length > 0 ?(
      member.list.map(item => (
        <div id="mrows">
          <div key={item._id} className="wcard">
            {this.props.user.login.isAuth === true ? (
              <Link id="edithead" to={`/editMember/${item._id}`}>EDIT</Link>
            ) : null}
            <img src={item.image} className="wimages" alt={item.name} />
            <div className="wcbody">
              <p id="wname">{item.name}</p>
              <p id="wpos">{item.position}</p>
              {/* <p id="wyear">{item.year}</p> */}
              <br></br>
              <div className="wcontact" id="wcontact">
                CONTACT
              </div>
              <p id="wmobile">{item.mobile}</p>
              <p id="wemail">{item.email}</p>
             
            </div>
          </div>
          
        </div>
      )) 
    ) : (
      null
    );



  render() {
    return (
      <div style={{ padding: "30px", paddingTop: 0 }}>
        {this.props.user.login.isAuth != null ? (
          <Link id="addmembut" className="wcontainer" to="/addMember">
            Add Member
          </Link>
        ) : null}
        
        <br></br>
        
       
        
        <div class="pcor">

        
              <div class="wheading">Programme Coordinator</div>

            <div class= "wcard-coordinator">
                  <img src={amiya} className="wimages-coordinator" />
                  <div className="wcbody-coordinator">
                    <p id="wname">Amiya Kumar Das</p>
                    <p id="wpos">Sociology</p>
                    <br></br>
                    <div className="wcontact-coordinator" id="wcontact">
                      CONTACT
                    </div>
                    <p id="wmobile">03712-275805</p>
                    <p id="wemail">amiyadas@gmail.com</p>
                </div>   
          </div>

     </div>
     
     <br></br>

     <div class="poff">
              <div class="wheading">Programme Officers</div>
            <div class= "wcard-officer">
                  <img src={Reetamoni} className="wimages-officer" />
                  <div className="wcbody">
                    <p id="wname-officer">Reetamoni Narzary</p>
                    <p id="wpos">EFL</p>
                    <br></br>
                    <div className="wcontact" id="wcontact">
                      CONTACT
                    </div>
                    <p id="wmobile">0-3712-275211</p>
                    <p id="wemail">reita@tezu.ernet.in</p>
                </div>   
          </div>
            <div class= "wcard-officer">
                  <img src={sd} className="wimages-officer" />
                  <div className="wcbody">
                    <p id="wname-officer">Sarat K Doley</p>
                    <p id="wpos">EFL</p>
                    <br></br>
                    <div className="wcontact" id="wcontact">
                      CONTACT
                    </div>
                    <p id="wmobile">0-3712-275230</p>
                    <p id="wemail">dolesar@tezu.ernet.in</p>
                </div>   
          </div>
          <div class= "wcard-officer">
                  <img src={ds} className="wimages-officer" />
                  <div className="wcbody">
                    <p id="wname-officer">Dibyakanta Seth</p>
                    <p id="wpos">FET</p>
                    <br></br>
                    <div className="wcontact" id="wcontact">
                      CONTACT
                    </div>
                    <p id="wmobile">03712-275708</p>
                    <p id="wemail">dibya05@tezu.ernet.in</p>
                </div>   
          </div>
          <div class= "wcard-officer">
                  <img src={apurba} className="wimages-officer" />
                  <div className="wcbody">
                    <p id="wname-officer">Apurba Saha</p>
                    <p id="wpos">Social Work</p>
                    <br></br>
                    <div className="wcontact" id="wcontact">
                      CONTACT
                    </div>
                    <p id="wmobile">+91-3712-27-5832</p>
                    <p id="wemail">apurbasaha@tezu.ernet.in</p>
                </div>   
          </div>
    
      </div>

     <br></br>

     <div class="stucor">
          <div class="wheading">Student Coordinators</div>


          <div id="pcontact">
          To see previous year's coordinators,
          <Link id="pcontact1" to="/previous-coordinators">
            {" "}
            Click Here
          </Link>
        </div>
        <br></br>

                  

              {this.showMembers(this.props.members)}

                     
    </div>  

    <div class="custom_br">
      
    </div>

    <br></br>
    <br></br>

    <div class="wheading">Web Masters</div>
            <br></br>
            <div class="cards_year row align-items-center">

                          <div class= "wcard-year">
                                <img src={rkv} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                <a  href={'https://www.linkedin.com/in/rkv/'} target="_blank">
                                    {" "}
                                   <p id="wname">Rakesh Vishwakarma</p> 
                                  </a>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                  
                                  
                              </div>   
                        </div>

                        <div class= "wcard-year">
                                <img src={abhinav} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                 <a  href={'https://www.linkedin.com/in/abhinav-anand-1a3510194/'} target="_blank">
                                    {" "}
                                   <p id="wname">Abhinav Anand</p> 
                                  </a>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                 
                              </div>   
                        </div>

                        

    </div>
    <br></br>
    <br></br>
            <div class="cards_year row align-items-center">

                          <div class= "wcard-year">
                                <img src={adittya} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <a  href={'https://www.linkedin.com/in/adittya-dey-3966b916b/'} target="_blank">
                                    {" "}
                                   <p id="wname">Adittya Dey</p> 
                                  </a>
                                 
                                  <p id="wpos">CSE</p>
                                  
                                  <br></br>
                                  
                                  
                              </div>   
                        </div>

                        <div class= "wcard-year">
                                <img src={subhasish} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                <a  href={'https://www.linkedin.com/in/subhasish-goswami-38356a12b/'} target="_blank">
                                    {" "}
                                   <p id="wname">Subhasish Goswami</p> 
                                  </a>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                 
                              </div>   
                        </div>

                        

    </div>
    <br></br>
    
        
  </div>
      

    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

export default connect(mapStateToProps)(Members);
