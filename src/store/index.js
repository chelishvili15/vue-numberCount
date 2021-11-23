import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    rNumber: 0,
  },
  mutations: {
    increase(state, value){
      state.count += value
    },
    dicrease(state, value){
      state.count -= value
    }
  },
  actions: {
    async addRandomNumber(context){
      let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
      context.commit('increase', data.data)
      
      this.state.rNumber = data.data
      console.log(this.state.rNumber)
    }
  },
  modules: {
  }
})
