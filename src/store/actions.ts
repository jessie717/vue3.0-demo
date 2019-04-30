import {
  SHOW_NAV, SHOW_MENU, SET_MENULOGO
} from './mutation-types'
import { Action, ActionTree } from 'vuex'

const showNav: Action<any, any> = ({ commit }, payload) => {
  commit(SHOW_NAV, payload)
}
const showMenu: Action<any, any> = ({ commit }, payload) => {
  commit(SHOW_MENU, payload)
}
const setMenuLogo: Action<any, any> = ({ commit }, payload) => {
  commit(SET_MENULOGO, payload)
}

const actions: ActionTree<any, any> = {
  showNav, showMenu, setMenuLogo
}

export default actions
