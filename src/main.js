
import { createApp } from "vue";
import App from "./App.vue"; 
import { createPinia } from 'pinia';
import router from './router'
// ===================== font awsome library adding =============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
app.use(createPinia())
app.use(router);

app.mount('#app')
library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);
 
 
// ==================================================


