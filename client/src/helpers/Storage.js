class Storage {
  constructor() {
    this.storageKey = 'storage'
    this.storage = {}
  }

  store() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.storage))
  }

  set(key, value) {
    this.storage[key] = value
    this.store()
  }

  get(key) {
    return this.storage[key]
  }

  unset(key) {
    this.storage[key] = null
    this.store()
  }
}

// Singleton
export default new Storage()
