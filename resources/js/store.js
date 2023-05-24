import { createStore } from 'vuex'
export default createStore({

  state: {
    notification: {
      isActive: false,
      type: '',
      resource: {
        id: '',
        name: ''
      },
      message: ''
    }
  },
  mutations: {
    sendNotification(state, payload) {
      state.notification = {
        isActive: true,
        type: payload.type,
        resource: {
          id: payload.id,
          name: payload.name
        },
        message: payload.message
      }
    },

    dismissNotification(state) {
      state.notification = {
        isActive: false,
        type: '',
        resource: {
          id: '',
          name: ''
        },
        message: ''
      }
    }
  },
  actions: {
    hideNotification({ commit }) {
      commit('dismissNotification')
    },
    showNotification({ commit }, payload) {
      commit('sendNotification', payload)
    },
  }

})