import axios from 'axios'

const key = '5b60fb095c2b4e6ea7fcc31f22d8e182'
const news = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: key
  }
})

export default news