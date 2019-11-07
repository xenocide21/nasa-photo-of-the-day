import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function Nasa() {
    const [data, setData] = useState([]);

    let date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() +1).padStart(2, '0');
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;

    let yesterday = new Date();
    var dd1 = String(yesterday.getDate() -1).padStart(2, '0');
    var mm1 = String(yesterday.getMonth() +1).padStart(2, '0');
    var yyyy1 = yesterday.getFullYear();

    yesterday = yyyy1 + '-' + mm1 + '-' + dd1;

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=WwgNv7WwrWDZMTvsnubfr5vo5N8bve0261seLzSK&start_date=${yesterday}&end_date=${date}`)
            .then(response =>{
                console.log("Nasa API data", response);
                const nasaPhoto = response.data;
                setData(nasaPhoto);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, [date, yesterday]);

    let nasaCards = data.map((d, i) => {
        return (
            <div key={i} className="entry">
                <NasaCard title={d.title} date={d.date} url={d.url} explanation={d.explanation} copyright={d.copyright} />
            </div>
        )
    });

    return (
        <div className="container">
            {nasaCards}
        </div>
    );
};