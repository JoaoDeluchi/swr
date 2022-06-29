import axios from 'axios'

const API_BASE_PATH = "https://api.github.com"

const createInstance = () =>
  axios.create({
    baseURL: API_BASE_PATH,
    timeout: 30000
  })

const request = () => {
  const instance = createInstance()
  instance.interceptors.response.use(
    (response) => {
      if (response.data.status && response.data.status.success === false) {
        return Promise.reject(response)
      }
      return response.data
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return {
    get: (path, params) => instance.get(path, { params })
  }
}

export default request()
