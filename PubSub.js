/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-22 12:51:09
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    // this.subscribers[type] = fn
    let listeners = this.subscribers[type] = this.subscribers[type] || [];
    listeners.push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    // delete this.subscribers[type]
    let listeners = this.subscribers[type]
    if (!listeners) return
    this.subscribers[type] = listeners.filter(listener => listener !== fn)
  }

  publish(type, ...args) {
    // todo publish
    // this.subscribers[type]&&this.subscribers[type](...args)
    let listeners = this.subscribers[type]
    if (!listeners) return
    listeners.forEach(listener => listener(...args))
  }

}
