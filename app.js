// --- यहाँ से Firebase का कोड शुरू ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// आपका असली Firebase कॉन्फ़िगरेशन
const firebaseConfig = {
  apiKey: "AIzaSyDZms3HgGMwYlZhe5_mB4y",
  authDomain: "crack-mind.firebaseapp.com",
  projectId: "crack-mind",
  storageBucket: "crack-mind.firebasestorage.app",
  messagingSenderId: "594038469271",
  appId: "1:594038469271:web:f9c070b8b", 
};

// Firebase को शुरू करें
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// === एडमिन लॉगिन का कोड ===
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("लॉगिन सफल! एडमिन पैनल खुल रहा है...");
        window.location.href = "admin.html";
      })
      .catch((error) => alert("लॉगिन फेल: " + error.message));
  });
}

// === एडमिन लॉगआउट का कोड ===
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
      alert("लॉगआउट हो गए!");
      window.location.href = "index.html";
    });
  });
}

// === लॉगिन स्टेटस चेक करें ===
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("एडमिन लॉगिन है:", user.email);
  } else {
    console.log("कोई लॉगिन नहीं है");
  }
});
// --- Firebase का कोड यहाँ खत्म ---


// --- आपका पुराना वेबसाइट कोड यहाँ से शुरू होगा ---
document.addEventListener("DOMContentLoaded", function () {

  // Start button
  const startButton = document.querySelector(".btn");

  if (startButton) {
    startButton.onclick = function () {
      alert("Welcome to CRACK MIND! Courses will start soon.");
    };
  }

  // Course cards
  const courses = document.querySelectorAll(".card");

  courses.forEach(function (course) {
    course.style.cursor = "pointer";

    course.addEventListener("click", function () {
      const title = course.querySelector("h3");

      if (title) {
        alert(title.innerText + " : Course will be available soon!");
      }
    });
  });

});
