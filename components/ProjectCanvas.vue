<template>
  <div class="project-canvas">
    <!-- Background with Tree Image -->
    <div class="background"></div>

    <!-- Project Canvas content -->
    <div class="canvas-content">
      <!-- Project Canvas Title -->
      <h2 class="canvas-title">Project Canvas</h2>

      <!-- Canvas and SVG Container -->
      <div class="graphics-container">
        <!-- Canvas Graphic with space -->
        <canvas id="canvas" width="400" height="300"></canvas>

        <!-- Enhanced SVG Graphic -->
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
          <!-- Background Rectangle -->
          <rect x="0" y="0" width="100%" height="100%" fill="#f0f0f0" />

          <!-- Sun -->
          <circle cx="50" cy="50" r="30" fill="yellow" />

          <!-- Sky -->
          <rect x="0" y="0" width="100%" height="80" fill="lightblue" />

          <!-- Ground -->
          <rect x="0" y="80" width="100%" height="20" fill="green" />

          <!-- Tree -->
          <rect x="180" y="60" width="20" height="40" fill="brown" />
          <circle cx="190" cy="40" r="30" fill="green" />

          <!-- House -->
          <rect x="250" y="120" width="60" height="60" fill="red" />
          <rect x="270" y="140" width="20" height="20" fill="white" />
          <polygon points="250,120 280,90 310,120" fill="gray" />

          <!-- Employee Drawing -->
          <circle cx="150" cy="150" r="10" fill="blue" />
          <line x1="150" y1="150" x2="200" y2="200" stroke="blue" stroke-width="3" />
          <line x1="200" y1="200" x2="250" y2="150" stroke="blue" stroke-width="3" />
          <rect x="220" y="180" width="30" height="30" fill="green" />
        </svg>
      </div>

      <!-- Add more content for the project canvas here -->
      <p>This is your creative project canvas. Use it to visualize your ideas and plan your projects.</p>
    </div>

    <!-- Round GIF -->
    <iframe src="https://giphy.com/embed/DFsTO64RR3AxbVuB6K" width="150" height="150" frameborder="0" class="rounded-gif" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
/* Project Canvas Container */
.project-canvas {
  position: relative;
  background-color: #f7f7f7; /* Light gray background color */
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column; /* Ensure content stacks properly */
  align-items: flex-start; /* Align content to the left */
}

/* Background with Tree Image */
.background {
  background-image: url("@/assets/tree.png"); /* Path to your tree image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  flex: 1; /* Cover the right side */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

/* Project Canvas Title */
.canvas-title {
  color: #333; /* Dark text color for the title */
}

/* Container for Canvas and SVG */
.graphics-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center;
}

/* Canvas Graphic with margin */
canvas {
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

/* Enhanced SVG Graphic */
svg {
  border: 1px solid #ccc;
}

/* Round GIF */
.rounded-gif {
  position: fixed; /* Fixed position to prevent scrolling */
  bottom: 20px; /* Adjust distance from the bottom */
  right: 20px; /* Adjust distance from the right */
  width: 150px; /* Adjust the width */
  height: 150px; /* Adjust the height */
  border-radius: 100%; /* Make it round */
  z-index: 999; /* Ensure it's above other content */
}
</style>
