import { createSSRApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createSSRApp(App).use(Antd).mount('#app')
