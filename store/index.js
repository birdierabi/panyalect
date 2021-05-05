import { getVehicles } from '@/api/request.js'

export const modules = {
  //
}

export const state = () => ({
  vehicles: []
})

export const actions = {
  GET_VEHICLES () {
    return getVehicles()
  }
}

export const mutations = {
  SET_VEHICLES (state, value) {
    state.vehicles = value
  }
}

export const getters = {
  //
}

export default {
  state,
  actions,
  mutations,
  getters
}
