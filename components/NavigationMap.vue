<template>
  <div class="navigation-map">
    <h2 class="map-heading">Explore Locations</h2>

    <!-- Workplace Map -->
    <div class="map-container">
      <h3 class="location-title">Workplace</h3>
      <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.996085586444!2d145.11571277535967!3d-37.81356067197571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad640b42896b6b1%3A0x59c42fd65a565506!2sBox%20Hill%20Hospital!5e0!3m2!1sen!2sau!4v1695611331290!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Home Map -->
    <div class="map-container">
      <h3 class="location-title">Home</h3>
      <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.3713843301093!2d145.11349247536168!3d-37.851599771966065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64067679fbf87%3A0xa1b51456eaf0ed17!2s13%20Peacock%20St%2C%20Burwood%20VIC%203125!5e0!3m2!1sen!2sau!4v1695880299760!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- University Map -->
    <div class="map-container">
      <h3 class="location-title">University</h3>
      <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.441001215639!2d145.11028498146024!3d-37.84997049968406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6405e00dcb559%3A0x8a9a1062e9b7bf2c!2sDeakin%20University%2FBurwood%20Hwy!5e0!3m2!1sen!2sau!4v1695879891342!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Add your content for the navigation map here -->
  </div>
</template>

<script>
export default {
  name: 'NavigationMap',
}
</script>

<style scoped>
/* Add your CSS styles for the navigation map here */
.navigation-map {
  text-align: center;
  margin: 40px; /* Increased margin for more space */
  padding: 20px;
  background-color: #f5f5f5; /* Light gray background */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.map-heading {
  font-size: 28px;
  margin-bottom: 20px;
  color: #1a6600; /* Dark green text color */
}

.map-container {
  margin-bottom: 40px; /* Increased margin for more space */
}

.location-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #1a6600; /* Dark green text color */
}

.map-iframe {
  border: 1px solid #ccc;
  max-width: 100%;
}
</style>
