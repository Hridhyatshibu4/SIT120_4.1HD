<template>
  <div class="learning-module">
    <!-- Learning Module content -->
    <div class="module-content">
      <!-- Learning Module Title -->
      <h2 class="module-title">📚 Learning Module 🎓</h2>

      <div class="columns">
        <!-- Video Lectures -->
        <div class="branch">
          <h3 class="section-title">📹 Video Lectures</h3>
          <ul>
            <li v-for="(lecture, index) in videoLectures" :key="index">
              <a :href="lecture.url" target="_blank">{{ lecture.title }}</a>
            </li>
          </ul>
        </div>

        <!-- YouTube Video -->
        <div class="branch">
          <h3 class="section-title">🎥 YouTube Video</h3>
          <iframe width="480" height="270" :src="embedYouTube('https://youtu.be/VpB0eVZir8U?si=rPWaKuc_NsHFfTFo')" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Asset Videos -->
      <div class="branch">
        <h3 class="section-title">📽️ Asset Videos</h3>
        <ul>
          <li class="video-item">
            <video controls height="240" width="480">
              <source src="@/assets/Video1.mp4" type="video/mp4">
              Your browser does not support the video element.
            </video>
          </li>
          <li class="video-item">
            <video controls height="240" width="480">
              <source src="@/assets/Video2.mp4" type="video/mp4">
              Your browser does not support the video element.
            </video>
          </li>
          <li class="video-item">
            <video controls height="240" width="480">
              <source src="@/assets/Video3.mp4" type="video/mp4">
              Your browser does not support the video element.
            </video>
          </li>
        </ul>
      </div>

      <!-- Audio Links -->
      <div class="branch">
        <h3 class="section-title">🎧 Audio Links</h3>
        <ul>
          <li v-for="(audio, index) in audioLinks" :key="index">
            <audio controls>
              <source :src="getAudioUrl(audio)" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Scrolling GIF -->
    <div class="scrolling-gif">
      <div style="width:200px;height:200px;position:relative;border-radius: 50%;">
        <iframe src="https://giphy.com/embed/qZtz9Mmo51biQK55RS" width="100%" height="100%" style="position:absolute;border-radius: 50%;" frameborder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearningModule',
  data() {
    return {
      videoLectures: [
        { title: 'Video Lecture 1', url: 'https://video.deakin.edu.au/media/t/1_1wmqj0vn' },
        { title: 'Video Lecture 2', url: 'https://video.deakin.edu.au/media/t/1_59br1ksh' },
        { title: 'Video Lecture 3', url: 'https://video.deakin.edu.au/media/t/1_wpil7rdw' },
      ],
      audioLinks: ['audio1'],
    };
  },
  methods: {
    getAudioUrl(audioName) {
      return require(`@/assets/${audioName}.mp3`);
    },
    isVideo(url) {
      return url.includes('video.deakin.edu.au') || url.includes('vimeo.com');
    },
    isYouTube(url) {
      return url.includes('youtube.com') || url.includes('youtu.be');
    },
    embedYouTube(url) {
      if (url.includes('youtube.com')) {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (url.includes('youtu.be')) {
        const videoId = url.split('/').pop();
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    },
    isAudio(audioName) {
      return audioName.endsWith('.mp3');
    },
  },
};
</script>
<style scoped>
/* Learning Module Content Center Alignment */
.module-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #e6f5e6; /* Light green background color */
  border: 1px solid #c2e0c2; /* Light green border */
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

/* Learning Module Title */
.module-title {
  color: #333; /* Dark text color for the title */
  font-size: 24px;
  margin-bottom: 20px; /* Space below the title */
}

/* Section Title (Video Lectures, YouTube Video, etc.) */
.section-title {
  color: #1a6600; /* Dark greenish text color for section titles */
  font-size: 20px;
}

/* Columns */
.columns {
  display: flex;
  flex-direction: column; /* Arrange sections vertically */
  gap: 20px; /* Space between sections */
}

/* Branch Styles (Light green boxes for each section) */
.branch {
  background-color: #e6f5e6; /* Light green background color */
  border: 1px solid #c2e0c2; /* Light green border */
  border-radius: 5px;
  padding: 20px;
}

/* Spacer */
.spacer {
  height: 20px;
}

/* Scrolling GIF */
.scrolling-gif {
  position: fixed; /* Fixed position to make it stay in the left corner */
  left: 0; /* Adjusted left position to place it in the left corner */
  bottom: 10px;
  z-index: 999; /* Place it above other content */
  padding: 0px;
}
</style>
