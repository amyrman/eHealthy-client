import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:8080/server-1.0-SNAPSHOT/api/',
  headers: {
    'Content-type': 'application/json'
  }
})
