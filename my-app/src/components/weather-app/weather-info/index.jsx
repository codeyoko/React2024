import Search from "../search";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Weather() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const APIkey = '686147d38e13e9f47868ef1104eeffb4';

    //fetch data
    async function fetchWeatherData() {

        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}`);
            if(!response.ok || response.status !== 200) {
                throw new Error("Could not fetch weather data!😞");
            }

            const data = await response.json();
            if(data){
                setWeatherData(data);
                setLoading(false);
                setError('');
                //console.log(data);
            }
            
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
       
    }

    async function handleSearch () {
        fetchWeatherData();
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('ja-JP', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    // useEffect(() => {
    //     fetchWeatherData();
    // },[]);

    return (

        <div>
            {/* Search input */}
            <Search 
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {/* Weather Info */}
            {loading ? <div>Loading...</div> : null}
            {error ? <div style={{color:'red', fontSize:'20px'}}>{error}</div> : null}

            {
                weatherData && 
                    <div className="weather-info">
                        <h1>{weatherData?.name}, {weatherData?.sys?.country} </h1>
                        <span>{getCurrentDate()}</span>
                        <p>{`${(weatherData?.main?.temp - 273.15).toFixed(0)}`}°C</p>
                        <p>Humidity: {weatherData?.main?.humidity}%</p>
                        <p>{weatherData?.weather[0]?.description}</p>
                        <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`} alt={weatherData?.weather[0]?.icon} />

                    </div>
            }

        </div>
    )
}