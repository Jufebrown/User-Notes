const app = angular.module('notesApp', ['ngRoute'])



/*************************************************
Initialize Firebase
*************************************************/

var config = {
  apiKey: "AIzaSyBZDzD-r0dDyfjqypYbUgXKmebAGKzFhwk",
  authDomain: "user-notes-74f00.firebaseapp.com",
  databaseURL: "https://user-notes-74f00.firebaseio.com",
  storageBucket: "user-notes-74f00.appspot.com",
  messagingSenderId: "397241484919"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser !== null) {
    var email = firebase.auth().currentUser.email
    $('.login-page').addClass('hidden')
    $('.main-page').removeClass('hidden')
  } else {
    $('.login-page').removeClass('hidden')
    $('.main-page').addClass('hidden')
  }
})
