<template>
  <div>
    <header class="py-3 mb-4 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <router-link to="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none" exact-active-class="active">
          <img :src="icon" alt="" class="bi me-2" width="35" height="35" />
          <span class="fs-4">E-COMM</span>
        </router-link>
        <div class="d-flex align-items-center mb-3 mb-lg-0">
          <router-link v-if="isLoggedIn" to="/cart" class="btn btn-outline-secondary me-2">
            <img :src="cart" alt="" /> ({{ cartItemsCount }})
          </router-link>
          <form @submit.prevent="searchItems" class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input v-model="searchQuery" type="search" class="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          <template v-if="isLoggedIn">
            <button @click="logout" class="btn btn-link ms-2">Logout</button>
          </template>
          <template v-else>
            <router-link to="/login" class="btn btn-link ms-2">Login</router-link>
            <router-link to="/signup" class="btn btn-link">Sign up</router-link>
          </template>
        </div>
      </div>
    </header>
    <nav class="py-2 bg-body-tertiary border-bottom">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link link-body-emphasis px-2" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/phones" class="nav-link link-body-emphasis px-2" active-class="active">Phone</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/laptop" class="nav-link link-body-emphasis px-2" active-class="active">Laptop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tablet" class="nav-link link-body-emphasis px-2" active-class="active">Tablet</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      icon: require('@/assets/icon.png'),
      cart: require('@/assets/Cart.png'),
      searchQuery: ''
    };
  },
  computed: {
    ...mapState(['isLoggedIn', 'cart']),
    ...mapGetters(['cartItemsCount']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    searchItems() {
      this.$store.dispatch('search', this.searchQuery);
      this.$router.push('/search');
    }
  }
};
</script>

<style>
/* Add custom styles here */
</style>
