module.exports = class EventEmitter {
    constructor() {
        this.events = {}
    }
    addEventListener(event, fn) {
        this.events[event] = this.events[event] || []
        this.events[event].push(fn);
    }
    removeEventListener(event, cb) {
        const eventList = this.events[event]
        for (let i = 0; i < eventList.length; i++) {
            if (eventList[i].toString() === cb.toString()) {
                eventList.splice(i, 1)
                break;
            }
        }
    }

    getHandlers(event) {
        return this.events[event]
    }
    emit(event, ...args) {
        const eventList = this.events[event]

        if (!eventList) return false;

        for (let fn of eventList) {
            fn(...args)
        }
    }
    on(event, cb) {
        this.addEventListener(event, cb)
    }

    off(event) {
        this.removeEventListener(event)
    }
    once(event, cb) {
        const wraper = () => {
            cb();
            console.log(this)
            this.removeEventListener(event, wraper)
        }
        this.addEventListener(event, wraper)
    }
}