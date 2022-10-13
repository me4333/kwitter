function login(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
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