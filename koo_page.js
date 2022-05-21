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

user_name= localStorage.getItem("username");
room_name= localStorage.getItem("room");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          likes:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
nametag= "<h4>" +names+ "<img class='user_tick' src='tick.png'></h4>";
msgtag= "<h4 class='message_h4'>"+message+"</h4>";
likebtn= "<button class='btn btn-warning' id=" +firebase_message_id+ " value="+like+" onclick='updateLike(this.id)'>";
spantag= "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row = nametag+msgtag+likebtn + spantag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id){
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        likes : updated_likes
    });
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location = "index.html";
}
