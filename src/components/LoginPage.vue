<template>
  <div class="container mt-5">
    <h2>Log In</h2>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" id="username" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Log In</button>
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
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      // Validate form inputs
      const usernameValid = this.username.length >= 6;
      const passwordValid = /^(?=.*\d).{8,}$/.test(this.password);

      if (!usernameValid) {
        this.error = 'Username must be at least 6 characters long';
      } else if (!passwordValid) {
        this.error = 'Password must be at least 8 characters long and include at least one number';
      } else {
        // Clear previous error message
        this.error = '';

        // Dispatch login action to Vuex store
        this.$store.dispatch('login', { username: this.username, password: this.password })
          .then(success => {
            if (success) {
              // Successful login
              this.$router.push('/'); // Redirect to home page
            } else {
              // Failed login
              this.error = 'Invalid username or password';
            }
          })
          .catch(error => {
            console.error('Login error:', error);
            this.error = 'An unexpected error occurred during login';
          });
      }
    }
  }
};
</script>

<style>
/* Add custom styles here */
</style>
