import { getVehicles } from '@/api/request.js'

export const modules = {
  //
}

export const state = () => ({
  vehicles: [],
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
  },
  ADD_VEHICLE (state, value) {
    state.vehicles = [...state.vehicles, value]
  }
}

export const getters = {
  getOptions (state) {
    return [...state.options, ...new Set(state.vehicles.map(element => element.type))]
  },
  getItem: state => id => {
    return state.vehicles.find(element => element.id === id)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
