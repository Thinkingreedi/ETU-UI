import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss';
import '../components/css/card.scss';
import MainTest from '../components/lib/demo/index';
import Card from '../components/lib/card/index';
Vue.use(MainTest);
Vue.use(Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
