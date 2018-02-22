/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-22 12:31:15
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    this.subscribers[type] = fn
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    delete this.subscribers[type]
  }

  publish(type, ...args) {
    // todo publish
    this.subscribers[type]&&this.subscribers[type](...args)
  }

}
