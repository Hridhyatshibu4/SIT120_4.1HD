<template>
  <div class="chat-portal">
    <!-- Giphy GIF -->
    <div class="giphy-gif">
      <a href="https://giphy.com/gifs/happy-sally-dinosally-kawnn6cRKIX2xNAv3C" target="_blank">via GIPHY</a>
      <iframe
        src="https://giphy.com/embed/kawnn6cRKIX2xNAv3C"
        width="150"
        height="150"
        style="position: fixed; top: 80px; right: 20px;"
        frameborder="0"
        class="giphy-embed"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Chat and contact form container -->
    <div class="chat-container">
      <h2 class="chat-heading">Chat Portal</h2>

      <!-- Chat messages -->
      <div class="chat-messages" ref="chatMessages">
        <div v-for="(message, index) in chatMessages" :key="index" :class="{ 'user-message': message.fromUser, 'bot-message': !message.fromUser }">
          {{ message.text }}
        </div>
      </div>

      <!-- User input -->
      <div class="user-input">
        <input v-model="userMessage" @keydown.enter="sendMessage" placeholder="Type your message..." />
        <button @click="sendMessage">Send</button>
      </div>

      <!-- Contact form -->
      <div class="contact-form">
        <h3>Contact Us</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name:</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Enter your name" required />
          </div>
          <div class="form-group">
            <label for="email">Your Email:</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="message">Your Message:</label>
            <textarea id="message" v-model="formData.message" rows="4" placeholder="Type your message here" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPortal',
  data() {
    return {
      userMessage: '',
      chatMessages: [],
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === '') return;

      // Add the user's message to the chat in black color
      this.chatMessages.push({ text: this.userMessage, fromUser: true });

      // Simulate a bot response (in a real implementation, you'd call a chatbot API)
      setTimeout(() => {
        this.chatMessages.push({ text: 'Bot: Hello, how can I assist you?', fromUser: false });
      }, 1000);

      // Clear the user's input
      this.userMessage = '';
    },
    submitForm() {
      // Handle form submission, e.g., send data to a server
      console.log('Form submitted with data:', this.formData);
      // You can add your logic here to send the form data to a server or perform other actions.
      // For simplicity, we're just logging the form data.
    },
  },
};
</script>

<style scoped>

.chat-portal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.giphy-gif {
  position: fixed;
  top: 50px;
  right: 20px;
}

.chat-container {
  text-align: center;
  max-width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.chat-heading {
  font-size: 28px;
  margin-bottom: 20px;
  color: #1a6600;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.user-message {
  text-align: right;
  color: black; /* User messages in black */
}

.bot-message {
  text-align: left;
  color: black; /* Bot responses in black */
}

.user-input {
  display: flex;
  justify-content: space-between;
}

input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.contact-form {
  background-color: #f0f0f0; /* Light gray background for the contact form */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.contact-form h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #1a6600; /* Dark green text color */
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: black; /* Black text color for labels */
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>