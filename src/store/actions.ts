import {
  SHOW_COVER
} from './mutation-types'
import { Action, ActionTree } from 'vuex'

const showCover: Action<any, any> = ({ commit }, payload) => {
  commit(SHOW_COVER, payload)
}

const actions: ActionTree<any, any> = {
  showCover
}

export default actions