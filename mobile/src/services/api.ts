import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.171.157:3333'
})