import React from "react";

const NavButtons = links =>{
    console.log(links);
    
    return (
        <button className="navLinks">
            <span>
                {links.link}
            </span>
        </button>
    );
};

export default NavButtons;