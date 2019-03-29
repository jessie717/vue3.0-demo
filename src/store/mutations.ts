import {
  SHOW_COVER
} from './mutation-types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  [SHOW_COVER](state, payload) {
    state.isShowCover = payload
  }
}

export default mutations