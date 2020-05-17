  
  // Initialize Firebase
  // alert(2)
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
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
  console.log('onMessage: ',payload);
  alert("A")
});

