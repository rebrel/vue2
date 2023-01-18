// 当watch一个对象的属性时
// 修改它的父类元素，这个时候cb回调函数中newVal=undefined


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

new Watcher(global, 'data.form.other.sex', function (newVal, oldValue) {
  console.log(newVal, oldValue)
})

global.data.form = 'zl'
