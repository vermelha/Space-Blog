export const state = () => ({
    loggedIn: false
  });
  
  export const mutations = {
    setLoggedInTrue(state) {
      state.loggedIn = true;
    }
  };
  