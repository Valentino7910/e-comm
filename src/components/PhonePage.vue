<template>
    <div class="container mb-5 pb-5">
      <h2 class="my-4">Phones</h2>
      <div class="row">
        <div v-for="phone in phones" :key="phone.id" class="col-lg-4 col-md-6 mb-4">
          <div class="card mb-3">
            <img class="card-img-top fixed-size-img" :src="getImage(phone.img)" alt="Phone Image">
            <div class="card-body">
              <h5 class="card-title">{{ phone.name }}</h5>
              <p class="card-text">${{ phone.price }}</p>
              <button @click="handleAddToCart(phone)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import itemsData from '@/items.json';
  
  export default {
    name: 'PhonePage',
    data() {
      return {
        phones: []
      };
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    mounted() {
      this.fetchPhones();
    },
    methods: {
      ...mapActions(['addToCart']),
      fetchPhones() {
        this.phones = itemsData.phones;
      },
      getImage(imagePath) {
        return require(`@/assets/${imagePath.split('/').pop()}`);
      },
      handleAddToCart(phone) {
        if (this.isLoggedIn) {
          this.addToCart(phone);
        } else {
          alert('Please log in to add items to the cart.');
        }
      }
    }
  };
  </script>
  
  <style>
  .fixed-size-img {
    width: 300px;
    height: 300px;
  }
  </style>
  