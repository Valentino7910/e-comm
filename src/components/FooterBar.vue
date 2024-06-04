<template>
    <footer class="footer mt-5">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top line">
                <div class="d-flex align-items-center col-md-4 mb-0">
                    <!-- Replace 'icon.png' with your actual icon -->
                    <img :src="require('@/assets/icon.png')" alt="" class="bi me-2" width="20" height="20">
                    <span class="fs-6">E-COMM</span>
                    <p class="mb-0 text-body-secondary ms-2">© 2024 E-COMM, Inc</p>
                </div>

                <!-- Placeholder link for demonstration -->
                <a href="/"
                    class="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
                    <!-- Placeholder image -->
                </a>

                <ul class="nav col-md-4 justify-content-end">
                    <!-- Replace these images with your actual payment provider logos -->
                    <li class="nav-item mx-1"><img :src="require('@/assets/amaxx.jpg')" alt="Amex" width="25"
                            height="25"></li>
                    <li class="nav-item mx-1"><img :src="require('@/assets/visa.jpg')" alt="Visa" width="25"
                            height="25"></li>
                    <li class="nav-item mx-1"><img :src="require('@/assets/PayPal.png')" alt="PayPal" width="25"
                            height="25"></li>
                    <li class="nav-item mx-1"><img :src="require('@/assets/mastercard.png')" alt="Mastercard" width="25"
                            height="25"></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: rgba(31, 195, 176, 1);
    /* Adjust the opacity as needed */
    z-index: 100;
    /* Ensure the footer is above other content */
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    /* Optional: Add a border at the top */
}

.line {
    border-top: 1px solid black;
}

.container {
    padding-top: 10px;
    /* Adjust top padding for better appearance */
}
</style>