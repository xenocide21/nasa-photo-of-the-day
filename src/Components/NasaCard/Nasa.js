import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function Nasa() {
    const [data, setData] = useState({});

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cyV30cBi4Fp4orZofYJXdd520ulmG3idrClBlyl1`)
            .then(response =>{
                console.log("Nasa API data", response);
                const nasaPhoto = response.data;
                setData(nasaPhoto);
                console.log(nasaPhoto);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <div className="container">
            <div className="entry">
                <NasaCard
                title={data.title}
                date={[data.date]}
                url={data.url}
                explanation={data.explanation}
                copyright={data.copyright}/>
            </div>
        </div>
    );
};

