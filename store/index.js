import { getVehicles } from '@/api/request.js'

export const modules = {
  //
}

export const state = () => ({
  vehicles: [],
  selectedVehicle: null,
  options: ['whatever']
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
  getOptions (state) {
    return [...state.options, ...new Set(state.vehicles.map(element => element.type))]
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
