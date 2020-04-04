import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Clock from "react-live-clock"
import {CustomIconButton} from '../styles/Customs.js'

import { Link } from "@reach/router"

//css
import '../styles/css/todo.css'



const Header = ({ iconClick, date }) => {
    return (
      <header>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
        <div style={{paddingRight: "4%"}}>
          <CustomIconButton onClick={iconClick} value="true" color="primary" size="medium">
            <FiPlusCircle />
          </CustomIconButton>
          <CustomIconButton onClick={iconClick} value="false" color="primary" size="medium">
            <FiMinusCircle />
          </CustomIconButton>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}> 
          <h4 style={{paddingRight: "15px", color: "rgba(0, 0, 0, 0.54)"}}>{date()}</h4>
          <div ><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{color: "rgba(0, 0, 0, 0.54)" }}/></div>
          <div style={{textDecoration: 'none', marginLeft: '4em', display: 'flex', flexDirection: 'row', alignItems: "center",}}>
                <Link to="login" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.65)', margin: '10px'}} >login</Link>
                <Link to="signup" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.65)', margin: '10px'}} >signup</Link> 
          </div>
        </div>
      </div>
    </header>
    )
};

export default Header;
