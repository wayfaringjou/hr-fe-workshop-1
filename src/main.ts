import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router';
import './global.css';

const app = createApp(App)
app.use(router)

async function prepareApp() {
    const { worker } = await import("./mocks/browser");
    return worker.start();
}

prepareApp().then(() => app.mount("#app"));

