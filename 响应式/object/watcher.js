export default class Watcher {
  constructor (vm, expOrFn, cb) {
    this.vm = vm
    this.cb = cb
    this.getter = parseExpOrFn(expOrFn)
    this.value = this.get()
  }
  get () {
    global.target = this
    let value = this.getter.call(this.vm, this.vm)
    global.target = undefined
    return value
  }
  update () {
    console.log('update')
    const oldValue = this.value
    try {
    this.value = this.get()

    } catch (e) {
      console.log(e)
    }
    this.cb.call(this.vm, this.value, oldValue)
  }
}

function parseExpOrFn (expOrFn) {
  if (typeof expOrFn === 'string'){
    let segment = expOrFn.split('.')
    return function (obj) {
      for(let i = 0; i < segment.length; i++) {
        if (!obj) {
          return
        }
        obj = obj[segment[i]]
      }
      return obj
    }
  }
}