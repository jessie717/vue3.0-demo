import {
  SHOW_NAV, SET_MENULOGO
} from './mutation-types'
import { Action, ActionTree } from 'vuex'

const showNav: Action<any, any> = ({ commit }, payload) => {
  commit(SHOW_NAV, payload)
}
const setMenuLogo: Action<any, any> = ({ commit }, payload) => {
  commit(SET_MENULOGO, payload)
}

const actions: ActionTree<any, any> = {
  showNav, setMenuLogo
}

export default actions
