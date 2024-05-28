import axios from "axios" 

export const weatherApi = axios.create({
    baseURL :"https://api.openweathermap.org/data/2.5"
});

export const weather_ApiKey = "60cbe1bea78ff151615e10bd8de6fd51";
