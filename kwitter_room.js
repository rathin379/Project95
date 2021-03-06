 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD7MastMJvlR2nMGQmPYB3WQNZ6GwlzWTw",
    authDomain: "kwitter-f04d6.firebaseapp.com",
    databaseURL: "https://kwitter-f04d6-default-rtdb.firebaseio.com",
    projectId: "kwitter-f04d6",
    storageBucket: "kwitter-f04d6.appspot.com",
    messagingSenderId: "1061127804210",
    appId: "1:1061127804210:web:280921d95bac10411ef32b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


  function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "messaging_room.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
  console.log("Room Name - " + Room_names);
  row = "<div class= 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names + "<div><hr>";
  document.getElementById("output").innerHTML += row;

    });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "messaging_room.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
