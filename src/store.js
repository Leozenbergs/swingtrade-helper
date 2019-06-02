import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
  },
  mutations: {
    newOrder(state, payload) {
      state.orders.push(payload)
    },
    finishOrder(state, payload) {
      state.orders.map(order => {
        if (order.id === payload.id) {
          order.result = payload.valueFinal - order.value;

          return order
        }

        return order
      })
    }
  },
  actions: {

  }
})
