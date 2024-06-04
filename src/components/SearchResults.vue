<template>
  <div class="container mt-5 pb-5">
    <h2>Search Results</h2>
    <div v-if="searchResults.length === 0" class="text-center mt-3">No results found for "{{ searchQuery }}"</div>
    <div v-else>
      <!-- Category selection buttons -->
      <div class="btn-group mb-3">
        <button 
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="{'btn-primary': selectedCategory === category, 'btn-secondary': selectedCategory !== category}"
          class="btn btn-sm">
          {{ category }}
        </button>
        <button 
          @click="clearCategorySelection"
          :class="{'btn-primary': selectedCategory === null, 'btn-secondary': selectedCategory !== null}"
          class="btn btn-sm">
          All
        </button>
      </div>
      <br>
      <!-- Sorting buttons -->
      <div class="btn-group mb-3">
        <button 
          @click="sortByPrice('asc')"
          :class="{'btn-primary': sortDirection === 'asc', 'btn-secondary': sortDirection !== 'asc'}"
          class="btn btn-sm">
          Price Low to High
        </button>
        <button 
          @click="sortByPrice('desc')"
          :class="{'btn-primary': sortDirection === 'desc', 'btn-secondary': sortDirection !== 'desc'}"
          class="btn btn-sm">
          Price High to Low
        </button>
      </div>

      <!-- Display filtered and sorted results -->
      <div class="row">
        <div v-for="item in filteredAndSortedResults" :key="item.id" class="col-md-4 mb-4">
          <div class="card mb-5">
            <img :src="getImage(item.img)" class="card-img-top fixed-size-img" :alt="item.name" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">${{ item.price }}</p>
              <button @click="handleAddToCart(item)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import itemsData from '@/items.json'; // Adjust the path relative to 'src' folder

export default {
  name: 'SearchResults',
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    },
    searchResults() {
      // Map over searchResults and ensure img paths are correctly resolved
      return this.$store.state.searchResults.map(result => ({
        ...result,
        img: result.img // Assuming items.json already contains correct paths
      }));
    },
    categories() {
      // Get unique categories from searchResults
      return [...new Set(this.searchResults.map(item => item.type))];
    },
    filteredAndSortedResults() {
      let results = this.searchResults;

      // Filter by selectedCategory
      if (this.selectedCategory) {
        results = results.filter(item => item.type === this.selectedCategory);
      }

      // Sort by sortDirection and price
      if (this.sortDirection === 'asc') {
        results.sort((a, b) => a.price - b.price);
      } else if (this.sortDirection === 'desc') {
        results.sort((a, b) => b.price - a.price);
      }

      return results;
    },
    ...mapGetters(['isLoggedIn'])
  },
  data() {
    return {
      selectedCategory: null,
      sortDirection: null // 'asc' for low to high, 'desc' for high to low
    };
  },
  methods: {
    getImage(imagePath) {
      // Use require to dynamically load images from src/assets folder
      return require(`@/assets/${imagePath}`);
    },
    selectCategory(category) {
      if (this.selectedCategory === category) {
        // If already selected, clear selection
        this.selectedCategory = null;
      } else {
        // Otherwise, select the new category and reset sort direction
        this.selectedCategory = category;
        this.sortDirection = null; // Reset sort direction
      }
    },
    clearCategorySelection() {
      this.selectedCategory = null;
      this.sortDirection = null; // Reset sort direction when clearing category selection
    },
    sortByPrice(direction) {
      this.sortDirection = direction;
    },
    ...mapActions(['addToCart']),
    handleAddToCart(item) {
      if (this.isLoggedIn) {
        this.addToCart(item);
      } else {
        alert('Please log in to add items to the cart.');
      }
    }
  }
};
</script>

<style>
/* Add custom styles here */
.fixed-size-img {
  width: 300px;  /* Set width to 300px */
  height: 300px; /* Set height to 300px */
}
</style>
