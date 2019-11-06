import React, { useState } from "react";
import NavButtons from "./NavButton";
import { navigation } from "../../data";

const NavBar = () =>{
    const [navigationState] = useState(navigation);
    console.log(navigationState);
    console.log(useState(navigation));
    return(
        <div className="navBar">
            <div className='nav-right'> 
            {navigationState.map( (link, key) =>(
                <NavButtons link={link} key={key}/>
            ))}
            </div>
        </div>
    );
};

export default NavBar;