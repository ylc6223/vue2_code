export const namespaced = true
export const state = {
  user: { id: 'abc123', name: 'Adam Smith' },
  count:123
}
export const mutations = {
  INCREMENT_COUNT(state,payload) {
    state.count += payload
  }
}
export const actions = {
  increment(context,payload) {
    context.commit("INCREMENT_COUNT",payload)
  }
}
export const getters = {
  count: state => {
    return state.count
  }
}
