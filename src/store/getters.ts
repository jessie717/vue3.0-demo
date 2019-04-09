import state from './state'
import {Getter, GetterTree} from 'vuex'

const getters: GetterTree<any, any> = {
  isShowCover : state => state.isShowCover,
  isMenuLogoWhite : state => state.isMenuLogoWhite
}

export default getters