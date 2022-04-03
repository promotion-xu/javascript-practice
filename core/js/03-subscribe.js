

class Subscribe {
  eventMap = {}

  on(event, cb) {
    if (this.eventMap[event]) {
      this.eventMap[event].push(cb)
    } else {
      this.eventMap[event] = [cb]
    }
  }

  emit(event, ...args) {
    if (!this.eventMap[event]) console.log("-----no-event")
    if (this.eventMap[event]) {
      this.eventMap[event].forEach(fn => {
        fn(...args)
      })
    }
  }

  off (event) {
    delete this.eventMap[event]
  }
}

const s = new Subscribe()
s.on('click', x => console.log(x))
s.emit('click', { id: 3 } )
s.off('click')
s.emit('click', { id: 3 } )
