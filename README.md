

---

# 🤖 AbhiRecruit

**AbhiRecruit** is an AI-powered recruitment automation platform developed to streamline and enhance the hiring process. Leveraging state-of-the-art technologies like Large Language Models (LLMs), RAG (Retrieval-Augmented Generation), and voice AI, it offers recruiters and candidates a fully automated, intelligent, and voice-interactive interview experience.

---

## 🚀 Features

* 🎯 **AI-Generated Interviews**: Automatically generates contextual and role-based interview questions.
* 🗣️ **Voice Interviewing with AI**: Conducts interactive, human-like voice interviews powered by Vapi.ai.
* 📊 **Recruiter Dashboard**: Manage job roles, questions, candidate sessions, and insights from a central dashboard.
* 🔗 **Unique Interview Links**: Share interviews with candidates via unique, secure links.
* 🤖 **Automated Evaluation**: AI evaluates candidate responses and generates performance summaries for recruiters.

---

## 🧑‍💼 User Workflows

### ✅ Recruiter

* Secure login via Supabase Auth (Google OAuth supported).
* Create interview templates for different job roles.
* View and analyze interview responses via a custom dashboard.
* Share interview URLs with candidates.

### 🎙️ Candidate

* Receive a voice-interactive interview via a secure link.
* Answer AI-generated questions in real time using voice.
* Responses are recorded, transcribed (via Deepgram), and evaluated.

---

## 🏗️ Tech Stack

| Layer              | Tech Used                                                                       |
| ------------------ | ------------------------------------------------------------------------------- |
| **Frontend**       | Next.js 15.2.4, React 18, Radix UI, Tailwind CSS                                |
| **Animations**     | Framer Motion, Lottie                                                           |
| **Voice AI**       | Vapi.ai (voice interaction), Deepgram (speech-to-text), PlayHT (text-to-speech) |
| **Authentication** | Supabase Auth + Google OAuth                                                    |
| **Backend DB**     | Supabase (PostgreSQL + Realtime)                                                |
| **AI Integration** | OpenAI API for interview logic and assessments                                  |
| **State Mgmt**     | React Context API                                                               |

---

## 📂 Folder Structure

```
AI-Recruiter/
├── app/               # Main app components and routes
├── public/            # Static assets
├── services/          # API clients (e.g., Supabase)
├── styles/            # Global styling and configuration
├── .env.local         # Environment variables
└── README.md          # Documentation
```

---

## 🛠️ Getting Started

To run this project locally:

```bash
git clone https://github.com/abhishekshuklaaaa/AbhiRecruit
cd AI-Recruiter
npm install
```

Then, start the development server:

```bash
npm run dev
```

Visit `https://abhi-recruit.vercel.app/` to access the application.

---

---


More Features to be added soon in this project !!!
- Video Call
- Live Video Detection and Analysis (Anti-Cheating)
- Live ATS Resume Scanner
- Information Mail Automation

## 📝 License

This project is licensed under the MIT License.  
See the [LICENSE](https://github.com/abhishekshuklaaaa/AbhiRecruit/blob/main/LICENSE) file for details.

