// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyD8K7-zP2C2awJzonHh9o0ZZhJnCKCC13o",
  authDomain: "nshu-resume-ranker.firebaseapp.com",
  projectId: "nshu-resume-ranker",
  storageBucket: "nshu-resume-ranker.appspot.com",
  messagingSenderId: "978780595236",
  appId: "1:978780595236:web:65e27a899078232ea224b1",
  measurementId: "G-EW2GMF8FFT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth check
firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "index.html"; // ensure correct path
  }
});

// Logout function
function logout() {
  firebase.auth().signOut().then(function () {
    alert("Logout successful");
    window.location.href = "index.html";
  }).catch(function (error) {
    alert("Logout failed: " + error.message);
  });
}