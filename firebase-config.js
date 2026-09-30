// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqt4Jz3BcQEXVop_GKRgnHDjqVxU0A9gs",
  authDomain: "aimbot-fx-72546.firebaseapp.com",
  databaseURL: "https://aimbot-fx-72546-default-rtdb.firebaseio.com",
  projectId: "aimbot-fx-72546",
  storageBucket: "aimbot-fx-72546.firebasestorage.app",
  messagingSenderId: "154555676329",
  appId: "1:154555676329:web:a7e820e84cd7ff2d281bb8",
  measurementId: "G-9BP9K8NR2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };