import { createRouter, createWebHashHistory } from 'vue-router'
import vMainPage from '../components/main-page/v-main-page.vue'
import vCatalogPage from '../components/catalog-page/v-catalog-page.vue'

const routes = [
  { path: '/', name: 'main', component: vMainPage },
  { path: '/catalog', name: 'catalog', component: vCatalogPage }
]

export let router = createRouter({
  history: createWebHashHistory(),
  routes
})