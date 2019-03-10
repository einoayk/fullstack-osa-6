import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(`response data ${response.data}`)
  return response.data  
}

const createNew = async content => {  
  const response = await axios.post(baseUrl, { content, votes: 0 })
  console.log(`responssi ${response.data.id}`)
  return response.data
}

const update = async (id, votes, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, { content, votes: votes + 1})
  return response.data
}

export default {
  getAll,
  createNew,
  update
}