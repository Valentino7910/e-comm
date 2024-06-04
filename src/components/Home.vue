<template>
    <div class="home pb-5">
      <!-- About Us Section -->
      <section class="about-us py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center">
              <h2>About Us</h2>
              <p class="lead">
                Welcome to our electronic e-commerce store dedicated to bringing you the latest and greatest in technology. At
              our store, we pride ourselves on offering a wide selection of high-quality products, including smartphones, 
              laptops, and tablets, to meet your every digital need.
              </p>
              <p class="lead">
                Our mission is to provide an exceptional shopping experience with unparalleled customer service. Whether you're 
              looking for cutting-edge smartphones that keep you connected on the go, powerful laptops for work or play, or 
              versatile tablets for entertainment and productivity, we've got you covered.
              </p>
            
            </div>
          </div>
        </div>
      </section>
  
      <!-- Hero Banner Section -->
      <section class="hero-banner py-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <h2>Welcome to Our Store</h2>
              <p class="lead">Discover the latest technology products.</p>
              <router-link to="/phones" class="btn btn-primary">Explore Products</router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Recommended Products Section -->
      <!-- Recommended Products Section -->
    <section class="recommended-products py-5">
      <div class="container">
        <h2 class="text-center mb-4">Recommended Products</h2>
        
        <!-- Laptop Products -->
        <div v-if="laptops.length > 0">
          <h3>Laptops</h3>
          <div class="row">
            <div v-for="(product, index) in laptops.slice(0, 2)" :key="index" class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <img :src="getImage(product.img)" class="card-img-top" :alt="product.name" style="height: 300px; width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">${{ product.price }}</p>
                  <button @click="handleAddToCart(product)" class="btn btn-primary btn-block">Add to Cart</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Phone Products -->
        <div v-if="phones.length > 0">
          <h3>Phones</h3>
          <div class="row">
            <div v-for="(product, index) in phones.slice(0, 2)" :key="index" class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <img :src="getImage(product.img)" class="card-img-top" :alt="product.name" style="height: 300px; width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">${{ product.price }}</p>
                  <button @click="handleAddToCart(product)" class="btn btn-primary btn-block">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tablet Products -->
        <div v-if="tablets.length > 0">
          <h3>Tablets</h3>
          <div class="row">
            <div v-for="(product, index) in tablets.slice(0, 2)" :key="index" class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <img :src="getImage(product.img)" class="card-img-top" :alt="product.name" style="height: 300px; width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">${{ product.price }}</p>
                  <button @click="handleAddToCart(product)" class="btn btn-primary btn-block">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // Import mapActions and mapGetters from Vuex

import itemsData from '@/items.json'; // Assuming you have product data in items.json

export default {
  name: 'Home',
  data() {
    return {
      laptops: [],
      phones: [],
      tablets: []
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']), // Map the isLoggedIn getter from Vuex
  },
  mounted() {
    this.fetchRecommendedProducts();
  },
  methods: {
    ...mapActions(['addToCart']), // Map the addToCart action from Vuex

    fetchRecommendedProducts() {
      // Fetching products from items.json, adjust according to your data structure
      this.laptops = itemsData.laptops.slice(0, 2); // Fetching first 2 laptops
      this.phones = itemsData.phones.slice(0, 2);   // Fetching first 2 phones
      this.tablets = itemsData.tablets.slice(0, 2); // Fetching first 2 tablets
    },

    getImage(imagePath) {
      // Use require to dynamically load images from src/assets folder
      return require(`@/assets/${imagePath}`);
    },

    handleAddToCart(product) {
      if (!this.isLoggedIn) {
        alert('Please log in to add items to the cart.');
        return;
      }

      // Dispatch the addToCart action with the product as payload
      this.addToCart(product)
        .then(() => {
          console.log(`Added ${product.name} to cart!`);
          // Optionally, you can show a success message or perform any other action upon successful addition
        })
        .catch(error => {
          console.error('Error adding to cart:', error);
          // Handle any errors if necessary
        });
    }
  }
};
</script>

<style scoped>
/* Add scoped styles here */
.about-us {
  background-color: #f8f9fa;
}
.hero-banner {
  background-color: #007bff;
  color: #fff;
}
.recommended-products {
  background-color: #f8f9fa;
}
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

@media (max-width: 991.98px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>