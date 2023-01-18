export class Dep {
  constructor () {
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  remove (sub) {
    let index = this.subs.indexOf(sub)
    if (index !== -1) {
      this.subs.splice(index, 1,)
    }
  }
  depend () {
    console.log('depend')
    if (global.target) {
      this.addSub(global.target)
    }
  }
  notify () {
    const subs = this.subs.slice()
    for(let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}