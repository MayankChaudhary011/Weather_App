import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weather,setWeather] = useState({
        city:"Lucknow",
        feelsLike: 45.75,
        humidity: 62,
        temp: 38.75,
        tempMax: 38.75,
        tempMin: 38.75,
        weather: "broken clouds",
    });

    let updateInfo =(newInfo)=>{
        setWeather(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <InfoBox info={weather}/>
            <SearchBox updateInfo={updateInfo}/>
        </div>
    )
}