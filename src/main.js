import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import pageHeader from './components/page-header.vue'
import pageFooter from './components/page-footer.vue'
import userTable from './components/user-table.vue'
import App from "./App.vue";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import store from './store'
import naive from "naive-ui";
import barChart from './components/bar-chart.vue'

library.add(fas, far, fab)
dom.watch();

const app = createApp(App).use(store)

app.component("font-awesome-icon", FontAwesomeIcon)
app.component('page-header', pageHeader)
app.component('user-table', userTable)
app.component('page-footer', pageFooter)
app.component('bar-chart', barChart)

app.use(naive);
app.mount('#app');
import "bootstrap/dist/js/bootstrap.js"
