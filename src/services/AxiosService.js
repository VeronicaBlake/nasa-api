import Axios from 'axios'
import { baseURL } from 'https://api.nasa.gov/planetary'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
