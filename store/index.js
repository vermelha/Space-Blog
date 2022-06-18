export const state = () => ({
    loggedIn: false,
    username: ""
  });
  
  export const mutations = {
    setLoggedInTrue(state) {
      state.loggedIn = true;
    },
    changeName (state, value) {
      state.username =  value.newName
    }
 
  };
  
  