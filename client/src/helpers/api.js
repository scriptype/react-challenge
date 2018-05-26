import configs from '../configs'

class ApiHelper {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl
  }

  getQueryString(data) {
    return Object.keys(data).map(key => {
      return `${key}=${data[key]}`
    }).join('&')
  }

  getDecoratedErrorObject(res) {
    return Object.assign(res.errors, {
      summary: res.message
    })
  }

  post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          return res
        }
        throw this.getDecoratedErrorObject(res)
      })
  }

  signUp({ name, email, password }) {
    const endpoint = 'auth/signup'
    const url = `${this.baseUrl}/${endpoint}`
    return this.post(url, this.getQueryString({
      name,
      email,
      password
    }))
  }

  login({ email, password }) {
    const endpoint = 'auth/login'
    const url = `${this.baseUrl}/${endpoint}`
    return this.post(url, this.getQueryString({
      email,
      password
    }))
  }
}

// Singleton
export default new ApiHelper({
  baseUrl: configs.api.baseUrl
})
