import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGSFtLc2nuqEMvwRq06yf1U3mP2G5-Tw",
  authDomain: "testone-1ea3a.firebaseapp.com",
  projectId: "testone-1ea3a",
  storageBucket: "testone-1ea3a.appspot.com",
  messagingSenderId: "382880642981",
  appId: "1:382880642981:web:2acbce081d2fd587081a4c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
