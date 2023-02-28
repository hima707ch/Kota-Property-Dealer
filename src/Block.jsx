import React from "react";

import './Block.css'
import logo from './Kota.png'

function Block(){
    return (
        <div className="one" >
            <div className="upper">
            <div className="left">
                <p className="para1">Deal with any property related work in Kota with Harshit Associates</p>
                <p className="para2">🗸  Real Estate</p>
                <p className="para2">🗸  Gov related <br/>&nbsp;&nbsp;&nbsp; Legal work</p>
                


            </div>
            <img src= {logo} width = "45%" ></img>
            </div>
            <center><p className="para4"style={{marginTop : "8%"}}>Buy or Sell any type of property Rural or Urban in Kota. We also handle all type of <br/> government related legal work.</p>
            </center>
        </div>
        
    );
}

export default Block;