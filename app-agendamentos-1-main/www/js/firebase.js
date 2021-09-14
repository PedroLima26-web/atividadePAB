const firebaseConfig = {
  apiKey: "AIzaSyBnrhiJr0v09STRiDsUWHbsBtBaSd9B1xQ",
  authDomain: "cordova-app-e58bc.firebaseapp.com",
  projectId: "cordova-app-e58bc",
  storageBucket: "cordova-app-e58bc.appspot.com",
  messagingSenderId: "438391694658",
  appId: "1:438391694658:web:a97cc13688c603e74e14db",
  measurementId: "G-B79E1BXXD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);