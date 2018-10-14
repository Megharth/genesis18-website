import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import eventObj from '../events'
import departmentObj from '../departments'

let events = eventObj.events
let departments = departmentObj.departments


export const store = new Vuex.Store({
  state: {
    events,
    departments,
    order: [],
    user: {
      name: null,
      authToken: null,
      pendingOrder: {
        events: [],
        sum: 0
      }
    }
  },
  mutations: {
    login(state, user) {
      let orderList = Object.assign([], user.orders)
      let ordersPage = {
        events: [],
        sum: 0
      }
      state.user = user
      orderList.forEach(function(order) {
        for(let eventId in order.events){
          state.events.forEach(function(event) {
            if(order.events[eventId] === event.id){
              ordersPage.events.push(event)
              ordersPage.sum += parseFloat(event.price)
            }
          })
        }
        state.order.push(ordersPage)
      })
      state.user = user
      localStorage.setItem('order', JSON.stringify(state.order))
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout(state) {
      state.user = {
        name: null,
        authToken: null,
        orders: [],
        pendingOrder: {
          events: [],
          sum: 0
        }
      }
    },
    addToCart(state, event) {
      state.user.pendingOrder.events.push(event)
      state.user.pendingOrder.sum += parseFloat(event.entryFee)
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    confirmOrder(state) {
      const order = Object.assign({}, state.user.pendingOrder)
      state.order.push(order)
      localStorage.setItem('order', JSON.stringify(state.order))
    },
    clearCart(state) {
      state.user.pendingOrder.events = []
      state.user.pendingOrder.sum = 0
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})