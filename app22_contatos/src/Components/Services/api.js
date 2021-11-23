import axios from "axios"

const api = axios.create({
  baseURL: 'https://ciro-terceiro-exercicio.herokuapp.com'
})

export default api