import { createStore, createLogger } from 'vuex'
import RandomData from './modules/RandomData'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    RandomData,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})