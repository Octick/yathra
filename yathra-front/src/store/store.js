import { createStore } from 'vuex'

const store = createStore({
    state: {
      api: 'https://api.yathratour.com/',
      // api: 'http://localhost:3000/'
    },
  })
  
  export default store;