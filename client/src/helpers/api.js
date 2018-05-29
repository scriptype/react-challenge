import configs from '../configs'
import Auth from '../modules/Auth'

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
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        return res.json().then(err => {
          const errorObject = Object.assign({
            errors: {}
          }, err)
          throw this.getDecoratedErrorObject(errorObject)
        })
      })
  }

  get(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'authorization': `Bearer ${Auth.getToken()}`
      }
    })
      .then(res => {
        // Api returns json only if it's a success.
        if (res.status === 200) {
          return res.json()
        }
        // Otherwise, just throw empty object, as api tells nothing.
        throw this.getDecoratedErrorObject({
          errors: {}
        })
      })
  }

  signUp(info) {
    const endpoint = 'auth/signup'
    const url = `${this.baseUrl}/${endpoint}`
    return this.post(url, this.getQueryString(info))
  }

  login(credentials) {
    const endpoint = 'auth/login'
    const url = `${this.baseUrl}/${endpoint}`
    return this.post(url, this.getQueryString(credentials))
  }

  getDashboard() {
    const endpoint = 'api/dashboard'
    const url = `${this.baseUrl}/${endpoint}`
    return this.get(url)
  }
}

// Singleton
export default new ApiHelper({
  baseUrl: configs.api.baseUrl
})
