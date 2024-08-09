
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyD87-amSVeLEVJaLQ_YFTppeKwycveAAek",
  authDomain: "tuneforge-18157.firebaseapp.com",
  databaseURL: "https://tuneforge-18157-default-rtdb.firebaseio.com",
  projectId: "tuneforge-18157",
  storageBucket: "tuneforge-18157.appspot.com",
  messagingSenderId: "151436948738",
  appId: "1:151436948738:web:37351ad02030e36c03fe1b",
  measurementId: "G-T0QWQNCCET"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="letchat_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name- "+Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;

  //End code
  });});}
getData();
function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="letchat_page.html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}