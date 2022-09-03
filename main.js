var firebaseConfig = {
    apiKey: "AIzaSyAGKs6O-dL5NLAi2nD-JWo5PdYILki4ys4",
    authDomain: "let-s-chat-353fe.firebaseapp.com",
    databaseURL: "https://let-s-chat-353fe-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-353fe",
    storageBucket: "let-s-chat-353fe.appspot.com",
    messagingSenderId: "548817088200",
    appId: "1:548817088200:web:bb5f8a44d8a9d7ff50bffd",
    measurementId: "G-9N03VJZPXV"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
  }
