import axios from 'axios';
// const cors = require('cors');

// //app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3333',
//   credentials: true
// }));

const API_KEY = "960e2919181e885921d1177ce5d6dbde";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Request: ", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

