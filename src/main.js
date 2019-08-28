
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios';
Vue.prototype.$http = axios;
import { Button,Col,Row,Table,TableColumn,Select,TabPane,Tabs,Option,OptionGroup,DatePicker} from 'element-ui';
// import { Button,Col,Row,Table,TableColumn,Select,TabPane,Tabs,Option,OptionGroup,DatePicker,TimePicker,TimeSelect,Timeline,TimelineItem} from 'element-ui';
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
Vue.use(DatePicker);
// Vue.use(TimePicker);
// Vue.use(TimeSelect);
// Vue.use(Timeline);
// Vue.use(TimelineItem);

window.eventBus = new Vue()

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
