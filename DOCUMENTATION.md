# National Tech Symposium 2026 - Official Documentation

Welcome to the official documentation for the **National Tech Symposium 2026 (Trivandrum Chapter)** web application. This document provides a comprehensive overview of the platform's architecture, features, user roles, and administrative guidelines.

---

## 1. System Overview

The platform is a modern, single-page application (SPA) designed to manage event marketing, user registrations, ticketing, and live metrics tracking. It employs a distinctive **neo-brutalist** design system to maximize user engagement and aesthetic appeal.

### 1.1 Tech Stack
- **Frontend Core:** React 18, Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS (Custom Neo-Brutalist Design System)
- **Icons:** Lucide React
- **Backend & Database:** Firebase Firestore (NoSQL Cloud Database)
- **Authentication:** Firebase Authentication (Email/Password)
- **Deployment & Hosting:** Configured for Vercel (via `vercel.json`)

---

## 2. User Roles & Permissions

The application implements a strict Role-Based Access Control (RBAC) system with three distinct tiers:

### 2.1 Public Visitor
- **Access:** Can view all public informational pages.
- **Capabilities:** Can read about the event, view the schedule, see speakers/sponsors, and access the registration or login portals.

### 2.2 Registered Participant
- **Access:** Public pages + **Participant Hub** (`/profile`).
- **Capabilities:** 
  - Authenticated via Firebase.
  - Can view their confirmed digital ticket, complete with a generated QR code.
  - Can review the specific tracks/workshops they have registered for.
  - Data is fetched securely and exclusively from their unique Firestore document (`UID`).

### 2.3 System Administrator (Organizer)
- **Access:** Public pages + **Admin Dashboard** (`/organizer`).
- **Capabilities:** 
  - View real-time, live-updating metrics from the Firestore database.
  - Track total registrations, unique participating colleges, and specific track popularity.
  - **Restriction:** Must be logged in explicitly with the authorized admin credential.

> [!IMPORTANT]  
> **Admin Credentials**
> - **Authorized Email:** `admin@symposium.com`
> - **Password:** (Managed securely inside the Firebase Console)
> - *Note: The admin account must be created directly via the Firebase Console (Authentication Tab) to prevent the admin from accidentally generating a participant ticket.*

---

## 3. Application Structure & Pages

The application is structured into several core routes:

### 3.1 Public Routes
| Path | Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page featuring a hero section, highlights, and primary call-to-actions. |
| `/about` | `About.jsx` | Information about the symposium's history, mission, and the Trivandrum Chapter. |
| `/schedule` | `Schedule.jsx` | An interactive timeline/schedule of events across the symposium dates. |
| `/tracks` | `Tracks.jsx` | Details on the various workshops, hackathons, and technical tracks available. |
| `/speakers` | `Speakers.jsx` | Profiles of keynote speakers and industry guests. |
| `/sponsors` | `Sponsors.jsx` | Partner and sponsor showcase. |
| `/gallery` | `Gallery.jsx` | A masonry-style gallery of previous symposium highlights. |
| `/contact` | `ContactFAQ.jsx` | Help center, FAQs, and contact forms. |

### 3.2 Authentication Routes
| Path | Component | Description |
|---|---|---|
| `/register` | `Register.jsx` | A multi-step form where users enter personal details, select tracks, set a password, and are saved directly to Firebase Auth and Firestore. |
| `/login` | `Login.jsx` | Secure portal for returning participants or admins to access their respective hubs. |

### 3.3 Protected Routes
| Path | Component | Description |
|---|---|---|
| `/profile` | `UserProfile.jsx` | **Participant Hub.** Requires a valid Firebase Auth session. Fetches and displays the user's ticket and selected tracks. |
| `/organizer` | `OrganizerDashboard.jsx` | **Admin Dashboard.** Requires the user to be logged in specifically as `admin@symposium.com`. Displays live event metrics. |

---

## 4. Key Features & Workflows

### 4.1 Global Authentication State
The app utilizes a global `AuthContext` to listen to Firebase's `onAuthStateChanged`. This allows the application to instantly reflect login states. For instance, the `Navbar` dynamically swaps the "Register/Login" buttons for either "Participant Hub" or "Admin Dashboard" depending on the logged-in user.

### 4.2 Secure Database Architecture
- **Registrations Collection:** When a user registers, their data is saved to a Firestore collection named `registrations`.
- **Document IDs:** The ID of the document in Firestore perfectly matches the user's Firebase Auth `UID`. This ensures that when a user logs into the Participant Hub, the app can securely fetch *only* their specific ticket data using `getDoc(doc(db, 'registrations', currentUser.uid))`.

### 4.3 Environment Variables
To protect sensitive infrastructure, Firebase configuration keys are stored in a local `.env` file and excluded from version control. When deploying (e.g., to Vercel), these variables must be injected into the production environment:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

### 4.4 UI/UX Enhancements
- **Smooth Routing:** A `ScrollToTop` component ensures that whenever a user navigates between pages or registration steps, the window smoothly resets to the top.
- **Custom Scrollbars:** Implemented custom webkit scrollbars that match the vibrant, neo-brutalist theme.
- **Micro-Animations:** Buttons feature active state scaling, and navigation links include animated underlines to provide tactile feedback to the user.

---

## 5. Maintenance & Future Expansion

- **Database Rules:** Before launching officially, ensure `firestore.rules` are configured in the Firebase console so that users can only read/write their own documents, and the admin can read all documents.
- **Adding New Tracks:** New tracks can be added directly to the `src/utils/mockData.js` file. The Registration form and Organizer Dashboard will automatically adapt to include them.
