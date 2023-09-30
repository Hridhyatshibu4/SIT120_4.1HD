<template>
<div class="login-container">
    <h1 class="login-heading">Login In 🌟</h1>
    <form>
      <div class="form-group">
        <label for="email"><span class="label-text">Email 📧:</span></label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password"><span class="label-text">Password 🔒:</span></label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password"><span class="label-text">Confirm Password 🔐:</span></label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <div class="form-group">
        <button @click.prevent="signup"><span class="button-text">Login In 🚀</span></button>
      </div>
    </form>
     <p class="signup-link">
      <router-link to="/sign-up">Sign up here</router-link>.
    </p>
   
  </div>
</template>

<script>
export default{
name: 'LoginPortal'
}
</script>
<style scoped>
/* Custom styles for a greenish shade */
.login-container {
  text-align: center;
  padding: 20px;
  background-color: #e6ffed; /* Light greenish shade */
}

form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.label-text {
  color: #3a8c64; /* Dark green color for label text */
}

input[type="email"],
input[type="password"] {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #42b983; /* Green color */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.button-text {
  font-weight: bold;
}

button:hover {
  background-color: #3a8c64; /* Darker green on hover */
}

.login-heading {
  color: black; /* Black color for the heading */
}

.signup-link {
  margin-top: 10px; /* Add spacing between the form and login link */
  color: #3a8c64; /* Dark green color for the link text */
  text-align: center;
}

.signup-link a {
  text-decoration: none; /* Remove underline from the link */
  font-weight: bold; /* Make the link text bold */
  color: #3a8c64; /* Dark green color for the link text */
}

.signup-link a:hover {
  color: #42b983; /* Change color on hover */
}
</style>