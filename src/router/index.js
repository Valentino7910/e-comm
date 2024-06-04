import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import PhonePage from '../components/PhonePage.vue';
import LaptopPage from '../components/LaptopPage.vue';
import TabletPage from '../components/TabletPage.vue';
import LoginPage from '../components/LoginPage.vue';
import Signup from '../components/Signup.vue';
import SearchResults from '../components/SearchResults.vue';
import Cart from '../components/Cart.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/phones',
    name: 'PhonePage',
    component: PhonePage,
  },
  {
    path: '/tablet',
    name: 'TabletPage',
    component: TabletPage,
  },
  {
    path: '/laptop',
    name: 'LaptopPage',
    component: LaptopPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: Signup
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
