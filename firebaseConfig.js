import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAi0zH0S0ATzVm4Li3B1eykAxgczXUgda8",
  authDomain: "e-voting-ec9c1.firebaseapp.com",
  projectId: "e-voting-ec9c1",
  storageBucket: "e-voting-ec9c1.appspot.com",
  messagingSenderId: "854046054244",
  appId: "1:854046054244:web:26966fc6a92ba269598c71",
  measurementId: "G-M4P09HM19W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();
