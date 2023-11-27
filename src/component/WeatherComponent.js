import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const WeatherComponent = () => {
const [weather,setWeather]=useState('')
const [weatherState,setWeatherState]=useState(null)
const [name,setName]=useState('')
const getWeahter=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=da893a7267f0c4d3b80293035a0b595c&units=metric`).then((result)=>{
    setWeather(result.data.main.temp)   
    setWeatherState(result.data.weather[0].main)
    
    }).catch((e)=>{
        alert(e)
    })
}
    return (
        <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" onClick={getWeahter}>
                    Submit
                </Button>
            </Form>
            <br />
            <div className="row d-flex justify-content-center px-3">
                <div className="card">
                    <h2 className="ml-auto mr-4 mt-3 mb-0">{name}</h2>
                    <p className="ml-auto mr-4 mb-0 med-font">{weatherState}</p>
                    <h1 className="ml-auto mr-4 large-font">{weather}&#176;</h1>
                </div>
            </div>
        </div>
    )
};

export default WeatherComponent;
