# NeuralDesk AI

An AI-powered conversational assistant built with a modern web interface, Node.js backend, and Google's Gemini API.

**Live Demo:** https://armaan0885.github.io/neuraldesk-ai/

## ✨ Features

- **AI-Powered Conversations:** Generate intelligent responses using Google Gemini.
- **Persistent Chat History:** Save and revisit previous conversations in your browser.
- **Conversation Management:** Start new chats and switch between saved conversations.
- **Responsive Interface:** A clean, modern interface for interacting with AI.
- **Secure API Architecture:** Keep the Gemini API key on the backend instead of exposing it in frontend code.
- **Cloud Deployment:** Frontend hosted on GitHub Pages and backend deployed on Render.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Application structure |
| CSS | Styling and responsive interface |
| JavaScript | Frontend logic and chat management |
| Node.js | Backend runtime |
| Express.js | API server |
| Google Gemini API | AI-generated responses |
| Git & GitHub | Version control and source code hosting |
| GitHub Pages | Frontend deployment |
| Render | Backend deployment |

## 🏗️ Architecture

```text
User
  ↓
NeuralDesk Web Interface
  ↓
Express.js Backend on Render
  ↓
Google Gemini API
  ↓
AI Response
  ↓
User Interface
```

Chat history is stored locally in the user's browser using localStorage.

## 🚀 Run Locally

### Prerequisites

- Node.js and npm
- A Google Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/Armaan0885/neuraldesk-ai.git
cd neuraldesk-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your own API key.

**Security:** Never commit your `.env` file or expose your API key in frontend code.

### 4. Start the backend

```bash
npm start
```

The API server runs on port 3000 by default.

### 5. Open the frontend

Open `index.html` using a local development server. Ensure the frontend's API URL points to your local backend at `http://localhost:3000/api/chat`.

## 🔐 Security Notes

- The Gemini API key is configured through an environment variable.
- The `.env` file should remain excluded from Git.
- The backend validates incoming messages and limits request sizes.
- Production deployments should use appropriate rate limiting, monitoring, and API usage controls.

## 📌 Future Improvements

- Markdown rendering and syntax-highlighted code blocks
- Streaming AI responses
- Chat renaming and deletion
- Exportable conversations
- Improved mobile experience
- Rate limiting and enhanced abuse protection
- Automated testing and error monitoring

## 👨‍💻 Author

**Armaan Gabbi**

BCA student interested in software development, Java, and AI-powered applications.

## 📄 License

This project is available for learning and portfolio purposes. Add a formal license file if you intend to specify reuse and distribution permissions.
