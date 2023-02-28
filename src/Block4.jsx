import React, { useState } from "react";
import "./Block.css"

function Block4(){

    const [data , setData] = useState({
        name : "",
        phone : "",
        message : ""
    })

    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        setData( (prev)=>{
            return {
                ...prev,
                [name] : value
            }
        } )
    }

    return <div className="two">
        <center>
        <h3> Contact Us </h3> 
        </center>
        <div className="right border" style={{height : "750px"}}>
        <p className="para5">Call Now</p>
        <p className="para4" style={{marginLeft : "10%"}}>+91 70739 28944</p>
        
        <br/><br/><br/><br/>

        <p className="para5">Email</p>
        <p className="para4" style={{marginLeft : "10%"}}>himanshu12320000@gmail.com</p>
        
        <br/><br/><br/><br/>

        <p className="para5">Address</p>
        <p className="para4" style={{marginLeft : "10%"}}>80 feet road, Near Hanuman Mandir</p>


        </div>
        <div className="left border" style={{height : "750px"}}>
            <p className="para5">Write us a message</p>

            <form action = "https://formspree.io/f/mayzjqdp" method="POST" >
            <input name = "name" onChange={change} placeholder="Name"/>
            <input name = "phone" onChange={change} placeholder="Pnone no.."/>
            <textarea name = "message" onChange={change} placeholder="Feel free to write a message"  />
            <button onClick={()=>{
                console.log(data)}
            } > Submit </button>
            </form>

        </div>
       
    </div>
}

export default Block4;