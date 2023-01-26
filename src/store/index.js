import { createStore, createLogger } from 'vuex'
import RandomData from './modules/RandomData'
import songs from './modules/songs'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    RandomData,
    songs,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})