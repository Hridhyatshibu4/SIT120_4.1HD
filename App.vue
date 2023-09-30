<template>
  <div id="app">
    <!-- Your app content here -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/sign-up">Sign Up</router-link></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/goals-and-achievements">Goals & Achievements</router-link></li>
        <li><router-link to="/learning-module">Learning Module</router-link></li>
        <li><router-link to="/project-canvas">Project Canvas</router-link></li>
        <li><router-link to="/navigation-map">Navigation Map</router-link></li>
        <li><router-link to="/chat-portal">Chat Portal</router-link></li>
      </ul>
    </nav>
    <router-view />
     <!-- Footer section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p>&copy; 2023 Task Tracker Pro</p>
          <p>Visit us at <a href="https://www.tasktrackerpro.com.au">www.tasktrackerpro.com.au</a></p>
        </div>
        <div class="footer-icons">
          <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
          <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>
    </footer>
    <ToTopButton />
   

  </div>
</template>

<script>
import ToTopButton from './components/ToTopButton.vue';

export default {
  components: {
    ToTopButton,
  },
};
</script>

<style>
body, #app {
  background-color: #333; /* Grey-black background color */
  color: #fff; /* White text color */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
}

.navbar {
  background-color: #42b983; /* Green background color */
  padding: 10px;
  border-bottom: 5px solid #3a8c64; /* Green grass border */
  margin-bottom: 20px; /* Add margin to visually connect the navigation panel */
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navbar li {
  font-weight: bold;
  color: #fff; /* White text color */
}

.navbar a.router-link-exact-active {
  color: #f0f0f0; /* Light gray for active links */
  background-color: #3a8c64; /* Darker green for active links */
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
}

.navbar a.router-link-exact-active:hover {
  background-color: #3a8c64; /* Maintain dark green background on hover */
}

.router-link-exact-active {
  font-weight: bold;
}

/* Footer styles */
.footer {
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
  padding: 20px 0; /* Adjust padding as needed */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-info p {
  margin: 0;
}

.footer-info a {
  color: #42b983; /* Green link color */
  text-decoration: none;
}

.footer-icons {
  display: flex;
  gap: 10px;
}

.footer-icons a {
  color: #fff; /* White icon color */
  text-decoration: none;
}



</style>
