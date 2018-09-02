import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import eventObj from '../events'
import departmentObj from '../departments'

let events= eventObj.events
let departments = departmentObj.departments

let dept_one = []

events.forEach((event) => {
  if(event.department === "one")
    dept_one.push(event)
})
export const store = new Vuex.Store({
  state: {
    events,
    departments,
    user: null,
    order: {
      events: [],
      sum: 0
    }
  },
  mutations: {
    addToCart(state, event) {
      state.order.events.push(event)
      state.order.sum += parseFloat(event.price)
    },
    clearCart(state) {
      state.order.events = []
      state.order.sum = 0
    }
  }
})