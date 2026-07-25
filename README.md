# National Tech Symposium 2026 🚀

A modern, neo-brutalist web application built for managing registrations, ticketing, and live metrics for a large-scale tech symposium. Built with React and Firebase.

## 🌟 Features

- **Neo-Brutalist UI**: A vibrant, engaging, and high-contrast user interface designed to stand out.
- **Participant Registration**: Seamless multi-step registration flow where users can select tracks, enter details, and receive a digital ticket with a generated QR code.
- **Secure Authentication**: Fully integrated with Firebase Authentication (Email/Password) to manage participant accounts.
- **Participant Hub**: A dedicated dashboard for attendees to view their confirmed tracks, download their tickets, and manage their profiles.
- **Organizer Dashboard**: A real-time, live-updating admin dashboard to track total registrations, college participation, check-ins, and track-specific metrics.
- **Role-Based Access Control**: Strict routing and database rules ensuring only the admin (`admin@symposium.com`) can access the organizer dashboard.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) powered by [Vite](https://vitejs.dev/)
- **Routing**: React Router DOM v6
- **Styling**: Pure CSS (Custom Neo-Brutalist Design System)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend/Database**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/sradhya9/sac-tvm.git
cd sac-tvm
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Authentication** (specifically Email/Password provider).
3. Grab your Firebase config object and create a file at `src/config/firebase.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```
*(Note: `firebase.js` is included in `.gitignore` by default to protect your API keys.)*

### 4. Admin Account Setup

To access the `/organizer` dashboard, you must create the admin credential directly in Firebase:
1. Go to your Firebase Console -> Authentication -> Users.
2. Click **Add User**.
3. Create an account with the exact email: `admin@symposium.com` and a password of your choice.

### 5. Start the Development Server

```bash
npm run dev
```

Your app will now be running on `http://localhost:5173`.

## 📦 Deployment

This project includes a `vercel.json` file configured for SPA routing. You can deploy it seamlessly to [Vercel](https://vercel.com/) with zero configuration.

```bash
npm install -g vercel
vercel
```

## 🔒 Security

Ensure you have proper Firestore Security Rules in place before going to production to protect participant data. A basic `firestore.rules` file is included in the project root.

---
*Designed for the Trivandrum Chapter.*
