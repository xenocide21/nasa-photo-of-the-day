import React from "react";
import styled from "styled-components";

const NasaH2 = styled.h2`
    border: 1px dotted grey;
    font-size: 2rem;
    padding: 1%;
    margin: 2%;
    height: 100px;
`;

const NasaP = styled.p`
    font-size: ${props => (props.primary ? "1.5rem" : "1rem")};
`;

const NasaDiv = styled.div`
    background-color: lightblue;
    border: 2px dashed grey;
    padding: 2%;
`;

const NasaSection = styled.section`
    display:flex;
`;

const NasaCard = props =>{

    return (
        <NasaSection>
            <NasaDiv className="nasa-card">
                <NasaH2 className='nasa-header'>{props.title}</NasaH2>
                <h4 className='date'>Date: {props.date}</h4>
                <img src={props.url} className='nasa-pic' alt="Today's Nasa Photograph" />
                <NasaP primary className='nasa-p'>{props.explanation}</NasaP>
                <NasaP className='nasa-p'>Copyright© {props.copyright}</NasaP>
            </NasaDiv>
        </NasaSection>
    )
};

export default NasaCard;