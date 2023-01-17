import { Dep } from "./dep.js"

export class Observer {
  constructor (value) {
    this.value = value
    if (Array.isArray(value)) {

    } else {
      this.walk(value)
    }
  }
  walk (value) {
    for(let key in value) {
      defineReactive(value, key, value[key])
    }
  }
}

function defineReactive (data, key, val) {
  if (typeof val === 'object') {
    new Observer(val)
  }
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      return val
    },
    set: function (newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}

