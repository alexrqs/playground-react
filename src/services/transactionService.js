import axios from 'axios'

const transactionService = axios.create({
  baseURL: 'http://localhost:3001/transactions'
})

export default transactionService
