import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/',
  withCredentials: false,

});
const token =  'd1f786c040304a0c9e444de57058ae0ba8bcb8d3'
export const settings = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Token ${  token}`,
  }
}
