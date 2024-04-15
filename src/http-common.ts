import axios from 'axios'
export default axios.create({
  baseURL: 'http://your-backend-url', // TODO: change to real url
  headers: {
    'Content-type': 'application/json'
  }
})
