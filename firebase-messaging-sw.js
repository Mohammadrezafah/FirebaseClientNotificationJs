importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  // var config = {
  //   apiKey: "Api Key goes here",
  //   authDomain: "projectid.firebaseapp.com",
  //   databaseURL: "https://projectid.firebaseio.com",
  //   projectId: "projectid",
  //   storageBucket: "projectid.appspot.com",
  //   messagingSenderId: ""
  // };

  var config = {
    apiKey: "BEFsko7qHKyhbPGGu1k8JYLONk3TX678quyFbhqYMYYvuiq4H0WEFutXc0thKsd8HN72aq8hlGsMHcP904plN38",
    authDomain: "nemsdev-19f4a.firebaseapp.com",
    databaseURL: "https://nemsdev-19f4a.firebaseio.com",
    projectId: "nemsdev-19f4a",
    storageBucket: "nemsdev-19f4a.appspot.com",
    messagingSenderId: "985472091316"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();

