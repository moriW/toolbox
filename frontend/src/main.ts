import { createSSRApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Network from './pages/Network.vue'
import DNSLookup from './components/Network/DNSLookup.vue'
import RouteTrace from './components/Network/RouteTrace.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            { path: "/", redirect: "/networking/route_trace" },
            {
                path: "/networking",
                component: Network,
                children: [
                    {
                        path: "route_trace",
                        component: RouteTrace
                    }
                ]
            }
        ]
    }
)

createSSRApp(App).use(ElementPlus).use(router).mount('#app')
