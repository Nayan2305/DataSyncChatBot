import axios from "axios";

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" 
    // window.Location.hostname.match(
    //     /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))$/
    // )
);

const API_URL = isLocalhost
    ? "http://localhost:4000/api/"
    : "http://Iotapi.sunshineagro.in/api/";

export const Axios = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});