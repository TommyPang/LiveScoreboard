// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBKSSsbxy5_ARth7GfY8xjjrd1ShMAeGZQ",
    authDomain: "scoreboard1-8914b.firebaseapp.com",
    databaseURL: "https://scoreboard1-8914b-default-rtdb.firebaseio.com",
    projectId: "scoreboard1-8914b",
    storageBucket: "scoreboard1-8914b.appspot.com",
    messagingSenderId: "376573419671",
    appId: "1:376573419671:web:985337a307ace7549609d2",
    measurementId: "G-37E9HLEGF6"
};
firebase.initializeApp(firebaseConfig);
firebase.database().ref('Score').on('value', function (snapshot) {
    document.getElementById("uhs-score").textContent = snapshot.val().uhs;
    document.getElementById("peths-score").textContent = snapshot.val().peths;
});