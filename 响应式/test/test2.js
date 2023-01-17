import Watcher from "../object/watcher.js";
import { Observer } from "../object/observe.js";

let data = {
  form: {
    name: 'xxx',
    other: {
      sex: 'man'
    }
  },
  type: 'student'
}

global.data = data


new Observer(global.data)

new Watcher(global, 'data.type', function (newVal, oldValue) {
  console.log(newVal, oldValue)
})

global.data.type = 'zl'
