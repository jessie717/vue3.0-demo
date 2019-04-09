import {
  SHOW_COVER, SET_MENULOGO
} from './mutation-types'
import { Action, ActionTree } from 'vuex'

const showCover: Action<any, any> = ({ commit }, payload) => {
  commit(SHOW_COVER, payload)
}
const setMenuLogo: Action<any, any> = ({commit}, payload) => {
  commit(SET_MENULOGO, payload)
}

const actions: ActionTree<any, any> = {
  showCover, setMenuLogo
}

export default actions