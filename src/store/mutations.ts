import {
  SHOW_NAV,
  SHOW_MENU,
  SET_MENULOGO
} from './mutation-types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [SHOW_NAV] (state, payload) {
    state.showNav = payload
  },
  [SHOW_MENU] (state, payload) {
    state.showNav = payload
  },
  [SET_MENULOGO] (state, payload) {
    state.isMenuLogoWhite = payload
  }
}

export default mutations
