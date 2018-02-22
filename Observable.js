/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-22 12:53:52
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    return this.observerList.push(observer)
  }
  remove(observer) {
    // todo remove observer from list
    // this.observerList.forEach((obs, index) => {
    //   if(obs === observer) {
    //     this.observerList.splice(index)
    //   }
    // })
    this.observerList = this.observerList.filter(ob => {
      ob !== observer
    })
  }
  count() {
    // return observer list size
    return this.observerList.length
  }
  get(index) {
    return this.observerList[index];
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    // this.observers.observerList.forEach((obs) => {
    //   obs.update(...args)
    // })
    let observerCount = this.observers.count()
    for(let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(...args)
    }
  }
}

module.exports = { Subject };