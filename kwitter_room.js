
//ADD YOUR FIREBASE LINKS HERE
var  firebaseConfig = {
      apiKey: "AIzaSyBNjwIFH7j3Tk16yhl5sgTj8jju142-c3A",
      authDomain: "kwitter2-76d71.firebaseapp.com",
      databaseURL:"https://kwitter2-76d71-default-rtdb.firebaseio.com/",
      projectId: "kwitter2-76d71",
      storageBucket: "kwitter2-76d71.appspot.com",
      messagingSenderId: "782333084193",
      appId: "1:782333084193:web:fd882715140ae47a659960"
    };
    

    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="welcome "+user_name+"!"

     function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding_roomname"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"

     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row 
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"

}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}