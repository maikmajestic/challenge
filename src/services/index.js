import axios from "axios";

const apiUrl = process.env.API_URL;

export const CCodeM = process.env.COUNTRY_CODE;

export const getTimeZone = () => axios.get(`http://worldtimeapi.org/api/ip/`);

export const getCities = () => axios.get('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json');




export const getCities2 = () => axios.get('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json');