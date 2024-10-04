// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create New User (Sign Up)
function signUp(username, password) {
    firebase.auth().createUserWithEmailAndPassword(username + '@noemail.com', password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created: ', user);
    })
    .catch((error) => {
        console.error('Error: ', error.message);
    });
}

// Log In
function login(username, password) {
    firebase.auth().signInWithEmailAndPassword(username + '@noemail.com', password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in as: ', user);
    })
    .catch((error) => {
        console.error('Login Error: ', error.message);
    });
}
