import { Observer } from "../object/observe.js";
// 实验

// 当给一个对象的属性赋值时，是否会触发get方法

// 结论： 会触发，可以理解为要给一个对象内部属性赋值，需要一层一层找到父对象，所以在触发set之前
// 先会触发父对象属性的get

// 影响： 比如
// watch('data.form.other.sex', function () {console.log('update')})
// vue会在get的时候收集依赖，所以父类元素也会收集到依赖，会多次触发事件吗？

let data = {
  form: {
    name: 'xx',
    age: 20,
    other: {
      sex: 'man'
    }
  },
  type: 'string'
}

new Observer(data)

// data.type = '123' // 触发set

// data.form = {} // 触发set

// data.form.age = 22 // 先触发父对象form的get， 然后触发set

data.form.other.sex = 'likeman'; // 先触发对象form的get，再触发other对象的get，最后触发set方法