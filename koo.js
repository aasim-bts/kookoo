function addUser(){
    user= document.getElementById("user_name").value;
    localStorage.setItem("username",user);
    window.location="koo_room.html";
}