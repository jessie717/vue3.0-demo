import state from './state'
import {Getter, GetterTree} from 'vuex'

const getters: GetterTree<any, any> = {
  isShowCover : state => state.isShowCover
}

export default getters