
import { createApp } from "vue";
import App from "./App.vue"; 
// ===================== font awsome library adding =============================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app');
 

// ==================================================
