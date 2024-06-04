<template>
    <div class="container">
      <h2 class="my-4">Cart</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button @click="removeFromCart(item)" class="btn btn-danger btn-sm">Remove</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-right"><strong>Total:</strong></td>
            <td>${{ getTotalPrice().toFixed(2) }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'Cart',
    computed: {
      ...mapGetters(['cartItems'])
    },
    methods: {
      ...mapActions(['removeFromCart']),
      getTotalPrice() {
        // Calculate total price of all items in the cart
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  