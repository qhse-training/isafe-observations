// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyCpI00DhnV2AqrVxE7eJ5nLyo7icFobLoU",
    authDomain: "i-safe-8aff1.firebaseapp.com",
    projectId: "i-safe-8aff1",
    storageBucket: "i-safe-8aff1.firebasestorage.app",
    messagingSenderId: "721183035804",
    appId: "1:721183035804:web:f81eba42fe1f272c1f3859",
    measurementId: "G-5737V4DSJJ"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

// Инициализация сервисов
const db = firebase.firestore();
const auth = firebase.auth();

console.log('Firebase подключен к проекту: i-safe-8aff1');
