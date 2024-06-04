<template>
  <div class="container mt-5">
    <h2>Sign Up</h2>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="signup">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" id="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
        <p v-if="error" class="text-danger mt-3">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    signup() {
      // Validate form inputs
      const usernameValid = this.username.length >= 6;
      const passwordValid = /^(?=.*\d).{8,}$/.test(this.password);

      if (!usernameValid) {
        this.error = 'Username must be at least 6 characters long';
      } else if (!passwordValid) {
        this.error = 'Password must be at least 8 characters long and include at least one number';
      } else if (!this.email) {
        this.error = 'Email is required';
      } else {
        // Assuming success for demo purposes
        this.$store.commit('setLoggedIn', true); // Mutate state to set logged in
        this.$router.push('/'); // Redirect to home page after signup
      }
    }
  }
};
</script>

<style>
/* Add custom styles here */
</style>
