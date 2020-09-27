import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储全局状态得
  state: {
    count: 1000
  }
});
