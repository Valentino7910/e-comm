<template>
    <div class="container mb-5 pb-5">
        <h2 class="my-4">Laptops</h2>
        <div class="row">
            <!-- Display each laptop as a card -->
            <div v-for="laptop in laptops" :key="laptop.id" class="col-lg-4 col-md-6 mb-4">
                <div class="card mb-3">
                    <!-- Use laptop.img for the image source -->
                    <img class="card-img-top fixed-size-img" :src="getImage(laptop.img)" alt="Laptop Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ laptop.name }}</h5>
                        <p class="card-text">${{ laptop.price }}</p>
                        <button @click="handleAddToCart(laptop)" class="btn btn-primary">Add to Cart</button>
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
    name: 'LaptopPage',
    data() {
        return {
            laptops: []
        };
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    mounted() {
        // Fetch laptops from JSON data
        this.fetchLaptops();
    },
    methods: {
        ...mapActions(['addToCart']),
        fetchLaptops() {
            // Fetch data from items.json and filter by laptop type
            this.laptops = itemsData.laptops;
        },
        getImage(imagePath) {
            // Use require to dynamically load images
            return require(`@/assets/${imagePath}`);
        },
        handleAddToCart(laptop) {
            if (this.isLoggedIn) {
                this.addToCart(laptop);
            } else {
                alert('Please log in to add items to the cart.');
            }
        }
    }
};
</script>

<style>
/* Additional styles can be added here */

.fixed-size-img {
    width: 300px;       /* Set width to 300px */
    height: 300px;      /* Set height to 300px */
}
</style>
