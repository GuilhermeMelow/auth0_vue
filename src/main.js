import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'

createApp(App)
    .use(createAuth0({
        domain: "dev-5e2b8d5cj81zdqio.us.auth0.com",
        client_id: "lfSgWzcYs4LPiUv93LYzuroGJVFoKIbU",
        redirect_uri: window.location.origin
    }))
    .mount('#app')
