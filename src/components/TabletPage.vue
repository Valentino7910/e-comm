<template>
    <div class="container mb-5 pb-5">
        <h2 class="my-4">Tablets</h2>
        <div class="row">
            <!-- Display each tablet as a card -->
            <div v-for="tablet in tablets" :key="tablet.id" class="col-lg-4 col-md-6 mb-4">
                <div class="card mb-3">
                    <!-- Use tablet.img for the image source -->
                    <img class="card-img-top fixed-size-img" :src="getImage(tablet.img)" alt="Tablet Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ tablet.name }}</h5>
                        <p class="card-text">${{ tablet.price }}</p>
                        <button @click="handleAddToCart(tablet)" class="btn btn-primary">Add to Cart</button>
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
    name: 'TabletPage',
    data() {
        return {
            tablets: []
        };
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    mounted() {
        // Fetch tablets from JSON data
        this.fetchTablets();
    },
    methods: {
        ...mapActions(['addToCart']),
        fetchTablets() {
            // Fetch data from items.json and filter by tablet type
            this.tablets = itemsData.tablets;
        },
        getImage(imagePath) {
            // Use require to dynamically load images
            return require(`@/assets/${imagePath.split('/').pop()}`);
        },
        handleAddToCart(tablet) {
            if (this.isLoggedIn) {
                this.addToCart(tablet);
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
