// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaQhCh3NMAZ9evrxGzx_ifbX_xJngifxU",
    authDomain: "classplay-login.firebaseapp.com",
    projectId: "classplay-login",
    storageBucket: "classplay-login.appspot.com",
    messagingSenderId: "648989613074",
    appId: "1:648989613074:web:e7116398b6a0383fe48ccb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Register function
  async function registerUser() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const pseudoEmail = `${username}@yourapp.com`;
  
    const usernameRef = db.collection("usernames").doc(username);
    const doc = await usernameRef.get();
  
    if (doc.exists) {
      alert("Username is already taken. Try another.");
      return;
    }
  
    auth.createUserWithEmailAndPassword(pseudoEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
  
        // Save username to Firestore
        usernameRef.set({ uid: user.uid });
        db.collection("users").doc(user.uid).set({ username: username, createdAt: new Date() });
  
        alert("Registration successful!");
        showLogout();
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
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
        console.log("User logged in:", user);
        alert("Login successful!");
        showLogout();
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  }
  
  // Logout function
  function logoutUser() {
    auth.signOut().then(() => {
      console.log("User logged out");
      alert("Logout successful!");
      showLogin();
    }).catch((error) => {
      console.error("Logout error:", error.message);
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
      console.log("User is logged in:", user);
      showLogout();
    } else {
      console.log("No user is logged in.");
      showLogin();
    }
  });
  