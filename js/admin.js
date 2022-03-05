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


function update(target) {
    if (target==="minus-peths") {
        var v = document.getElementById("peths-score").innerText;
        document.getElementById("peths-score").textContent = (parseInt(v) - 1).toString();
        firebase.database().ref('Score').update({
            peths: parseInt(v) - 1
        });
    }
    else if (target==="plus-peths") {
        var v = document.getElementById("peths-score").innerText;
        document.getElementById("peths-score").textContent = (parseInt(v) + 1).toString();
        firebase.database().ref('Score').update({
            peths: parseInt(v) + 1
        });
    }
    else if (target==="minus-uhs") {
        var v = document.getElementById("uhs-score").innerText;
        document.getElementById("uhs-score").textContent = (parseInt(v) - 1).toString();
        firebase.database().ref('Score').update({
            uhs: parseInt(v) - 1
        });
    }
    else if (target==="plus-uhs") {
        var v = document.getElementById("uhs-score").innerText;
        document.getElementById("uhs-score").textContent = (parseInt(v) + 1).toString();
        firebase.database().ref('Score').update({
            uhs: parseInt(v) + 1
        });
    }
    else {
        document.getElementById("uhs-score").textContent = "0";
        document.getElementById("peths-score").textContent = "0";
        firebase.database().ref('Score').update({
            uhs: 0
        });
        firebase.database().ref('Score').update({
            peths: 0
        });
    }
}

function logout(){
    firebase.auth().signOut();
    window.location.href = "index.html"
}