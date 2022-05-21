var firebaseConfig = {
    apiKey: "AIzaSyAc046HcsTGeIJeBcNB-ZV1zhG4cReSgB8",
    authDomain: "kooooo-8a3d6.firebaseapp.com",
    databaseURL: "https://kooooo-8a3d6-default-rtdb.firebaseio.com",
    projectId: "kooooo-8a3d6",
    storageBucket: "kooooo-8a3d6.appspot.com",
    messagingSenderId: "833819651934",
    appId: "1:833819651934:web:d6d996cb12b751e4f8a9cf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username= localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username + " !";

function addroom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room"
    });
    localStorage.setItem("room",room_name);
    window.location="koo_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name is "+ Room_names);
    row= '<div class="room_name" id='+Room_names+' onclick="redirect(this.id)" >#'+Room_names+'</div><hr>';
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirect(roomname){
    console.log(roomname);
    localStorage.setItem("room",roomname);
    window.location="koo_page.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location="index.html";
}
