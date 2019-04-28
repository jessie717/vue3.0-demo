import state from './state'
import { Getter, GetterTree } from 'vuex'

const getters: GetterTree<any, any> = {
  showNav: state => state.showNav,
  isMenuLogoWhite: state => state.isMenuLogoWhite
}

export default getters
