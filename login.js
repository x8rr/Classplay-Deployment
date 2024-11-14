import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCaQhCh3NMAZ9evrxGzx_ifbX_xJngifxU",
          authDomain: "classplay-login.firebaseapp.com",
          projectId: "classplay-login",
          storageBucket: "classplay-login.firebasestorage.app",
          messagingSenderId: "648989613074",
          appId: "1:648989613074:web:6f641d0b151712c7e48ccb",
          measurementId: "G-2F1WPF3JPK"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

async function registerUser() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const pseudoEmail = `${username}@yourapp.com`;
  
    const usernameRef = db.collection("usernames").doc(username);
    const doc = await usernameRef.get();
  
    if (doc.exists) {
      alert("Username is already taken. Please choose another.");
      return;
    }
  
    auth.createUserWithEmailAndPassword(pseudoEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        // Save username to Firestore
        usernameRef.set({ uid: user.uid });
        db.collection("users").doc(user.uid).set({ username: username, createdAt: new Date() });
  
        alert("Registration successful!");
        showLogout();
      })
      .catch((error) => {
        alert("Error during registration: " + error.message);
      });
  }
  
      
      // Login function
      function loginUser() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const pseudoEmail = `${username}@yourapp.com`;
      
        auth.signInWithEmailAndPassword(pseudoEmail, password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert("Login successful!");
            showLogout();
          })
          .catch((error) => {
            alert("Error during login: " + error.message);
          });
      }
      
      // Logout function
      function logoutUser() {
        auth.signOut().then(() => {
          alert("You have been logged out successfully!");
          showLogin();
        }).catch((error) => {
          alert("Error during logout: " + error.message);
        });
      }
      
      // UI State Functions
      function showLogout() {
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
      }
      
      function showLogin() {
        document.getElementById('register').style.display = 'block';
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
      }
      
      // Listen for auth state changes
      auth.onAuthStateChanged((user) => {
        if (user) {
          showLogout();
        } else {
          showLogin();
        }
      });