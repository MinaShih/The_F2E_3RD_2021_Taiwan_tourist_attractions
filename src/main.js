import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";
import { createPinia } from "pinia";

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes,
});

// 5. Create and mount the root instance.

// Make sure to _use_ the router instance to make the
// whole app router-aware.
const app = createApp(App);
app.use(router).use(createPinia())
    .mount("#app");