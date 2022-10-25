import React, { useEffect, useState } from "react";
import axio from "axios";
import { Card } from "react-bootstrap";

const Weather = () => {
    const [Weather, setWeather] = useState({});

    useEffect(() => {
        function success(pos) {
            var crd = pos.coords;
            axio.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1581b57091b320b7a370afc58058cb59`
            ).then(res => setWeather(res.data));
        }
        navigator.geolocation.getCurrentPosition(success);
    }, []);

    return (
        <Card>
            <Card.Header className="bg-primary">
                <Card.Title className="text-white">Weather</Card.Title>
            </Card.Header>
            <Card.Body>
                
                <Card.Text>{Weather.name} ,{Weather.sys?.country}</Card.Text>
                
                <Card.Img
                    style={{  height: "10rem" }}
                    src="https://cdn-icons-png.flaticon.com/512/5088/5088080.png"
                    alt=""
                />
                <Card.Text>Weather: {Weather.weather?.[0].main}</Card.Text>
                <Card.Text>Clouds: {Weather.clouds?.all} %</Card.Text>
                <Card.Text>Temperature: {(Weather.main?.temp -273.15).toFixed()} °C</Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default Weather;
