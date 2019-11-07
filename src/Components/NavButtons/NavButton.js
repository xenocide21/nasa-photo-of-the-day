import React from "react";
import styled from "styled-components";

const NasaButton = styled.button`
    background-color: lightblue;
    color: white;
    font-size: 1rem;
    margin: 2%;
    padding: 1%;
    border-radius: 35%;
`;

const NavButtons = links =>{
    console.log(links);
    
    return (
        <NasaButton className="navLinks">
            <span>
                {links.link}
            </span>
        </NasaButton>
    );
};

export default NavButtons;