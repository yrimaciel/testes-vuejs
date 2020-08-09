import Vue from "vue";
import store from './store/store'
import App from "./App.vue";
import Vue2Filters from "vue2-filters";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(Vue2Filters);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
