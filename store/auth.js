
  export const state = () => ({
  user: null,
  pass: null,
  loggedIn: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setPass(state, pass) {
    state.pass = pass
  },
  setLoggedInTrue(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
}
