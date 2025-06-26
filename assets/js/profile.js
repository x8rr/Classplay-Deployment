import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, setDoc, addDoc, collection, onSnapshot, serverTimestamp, query, orderBy, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMGCzjVLZUVZHCCxBDql5npVz_wcKxEX4",
  authDomain: "chat-room-eda59.firebaseapp.com",
  projectId: "chat-room-eda59",
  storageBucket: "chat-room-eda59.appspot.com",
  messagingSenderId: "1063922969354",
  appId: "1:1063922969354:web:c1693925c907a1681368f3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// all html elements lol

const loginbtn = document.getElementById('login-btn')
const registerbtn = document.getElementById('register-btn')
const logoutbtn = document.getElementById('logout-btn')

const registerUsername = document.getElementById('register-username')
const registerPassword = document.getElementById('register-password')

const loginUsernameme = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')

export async function register(username, password) {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            throw new Error("that username is taken, sorry");
        }

        const fakeEmail = `${username}@ucpaccounts.com`; 
        const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, password);
        const uid = userCredential.user.uid;

        // 3. Store user data in Firestore
        await setDoc(doc(db, "users", uid), {
            username: username,
            role: "user",
            createdAt: new Date()
        });

        console.log("User registered successfully!");
    } catch (error) {
        console.error("Registration error:", error.message);
    }
}

export async function login(username, password) {
    try {
        const pseudoEmail = `${username}@ucpaccounts.com`

        const userCred = await signInWithEmailAndPassword(auth, pseudoEmail, password);
        const uid = userCred.user.uid;

        const userDoc = await getDoc(doc(db, 'users', uid));
        const userData = userDoc.data();

        console.log("logged in as", userData.username);
        return userData;
    } catch (error) {
        console.error("login error: ", error.message);
        throw error;
    }
}

registerbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = registerUsername.value;
    const password = registerPassword.value;
    await register(username, password);

    console.log("registered");
});

loginbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = loginUsernameme.value;
    const password = loginPassword.value;
    await login(username, password);

    console.log("logged in");
});

window.register = register;
window.login = login;