
import Vue from 'vue'
import App from './App'
import router from './router/index'
import { Button,Col,Row,Table,TableColumn,Select,TabPane,Tabs,Option,OptionGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(TabPane);
Vue.use(Tabs);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
