import {
  SHOW_COVER,
  SET_MENULOGO
} from './mutation-types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [SHOW_COVER](state, payload) {
    state.isShowCover = payload
  },
  [SET_MENULOGO](state, payload) {
    state.isMenuLogoWhite = payload
  }
}

export default mutations