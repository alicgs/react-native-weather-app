import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&$days=${params.days}&aqi=no&alerts=no`;
const loactionsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
    const options = {
        method: "GET",
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        //console.log("error:", error);
        return null;
        ;
    }
}
export const fetchWeatherForecast = params =>{
    return apiCall(forecastEndpoint(params));   
}
export const fetchLocations = params =>{
    return apiCall(loactionsEndpoint(params));
}