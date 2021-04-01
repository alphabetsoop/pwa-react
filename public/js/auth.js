// import firebase from "firebase/app";
// import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAoVChYUsD21VLWfhO7MEkYDKUaccTEu0Y",
    authDomain: "inner-domain-309321.firebaseapp.com",
    projectId: "inner-domain-309321",
    storageBucket: "inner-domain-309321.appspot.com",
    messagingSenderId: "980818884987",
    appId: "1:980818884987:web:01c868fa475f550bd765de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login inputs
const usernameInput = document.querySelector("input[type='email']")
const passwordInput = document.querySelector("input[type='password']")
let usernameValue, passwordValue

let loginBtn = document.getElementById("login-submit-button")
loginBtn.addEventListener("click", () => {
  usernameValue = usernameInput.value
  passwordValue = passwordInput.value
  
  // Log-in user
  firebase.auth().signInWithEmailAndPassword(usernameValue, passwordValue).then(function(user) {
    console.log("User logged in");
    window.location.href = "/public/index.html"
  }).catch(function(error) {
    firebase.auth().createUserWithEmailAndPassword(usernameValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      window.location.href = "/public/index.html"
    })
    .catch((error) => {
      invalidAttempt([usernameInput, passwordInput], error)
    });
  });
});

// Login if enter is pressed on username field
usernameInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    loginBtn.click();
  }
})

// Login if enter is pressed on password field
passwordInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    loginBtn.click();
  }
})

// For invalid login attempts
function invalidAttempt(resetFields, error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(`errorCode: ${errorCode}\nerrorMessage: ${errorMessage}`);
    
    resetFields.forEach(field => field.value = "")
  
    function animate(btn) {
      let defaultColor = btn.style.backgroundColor
      btn.animate({
        backgroundColor: ["firebrick", "firebrick", defaultColor],
        transform: ["translateX(-3px)", "translateX(3px)", "translateX(0)"],
        easing: [ "ease" ],
        offset: [ 0.35, 0.5 ]
      }, 350)
    }
  
    animate(loginBtn)
  }