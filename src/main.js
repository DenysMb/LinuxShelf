import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from 'iview';
import VueFire from 'vuefire'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex';

Vue.use(iView);
Vue.use(VueFire);
Vue.use(Vuex);
Vue.prototype.$color = 'green';
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    color: 'black'
  },
  mutations: {
    changeColor (state, color) {
      state.color = color
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
