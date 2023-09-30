<template>
  <div class="home-view">
    <h1 class="fade-in emerald-green">Welcome to Task Tracker Pro 🌼</h1>
    <p class="fade-in emerald-green">
      Task Tracker Pro is your all-in-one productivity platform designed to help you manage your tasks, goals, and achievements.
      Explore our five portals:
    </p>
    <ul class="fade-in emerald-green">
      <li>Goals and Achievements 🏆</li>
      <li>Learning Module 📚</li>
      <li>Project Canvas 🎨</li>
      <li>Navigation Map 🗺️</li>
      <li>Chat Portal 💬</li>
    </ul>
    <iframe src="https://giphy.com/embed/JuyhnRiWcPlAumeXnD" width="60" height="60" frameborder="0" class="giphy-embed rounded-gif" allowfullscreen></iframe>
    <p class="fade-in emerald-green">
      Our greenish environment-themed interface will keep you focused and motivated. Start organizing your tasks and achieving your goals today!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home-view {
  background-color: #cdeac0; /* Greenish background color */
  padding: 100px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2em;
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

.emerald-green {
  color: #00796b; /* Emerald green text color */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Style for the round GIF */
.rounded-gif {
  position: fixed;
  bottom: 20px; /* Adjust distance from the bottom */
  right: 20px; /* Adjust distance from the right */
  width: 150px; /* Adjust the width */
  height: 150px; /* Adjust the height */
  border-radius: 100%; /* Make it round */
  z-index: 1999; /* Ensure it's above other content */
}
</style>
