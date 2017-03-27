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

// firebase.auth().onAuthStateChanged(() => {
//   if (firebase.auth().currentUser !== null) {
//     var email = firebase.auth().currentUser.email
//     $('.login-page').addClass('hidden')
//     $('.main-page').removeClass('hidden')
//   } else {
//     $('.login-page').removeClass('hidden')
//     $('.main-page').addClass('hidden')
//   }
// })

// // //sign-out button
// // $('.sign-out').click(()=>{
// //   firebase.auth().signOut()
// // })

// app.run(["$rootScope", "$location", function($rootScope, $location) {
//   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//     // We can catch the error thrown when the $requireSignIn promise is rejected
//     // and redirect the user back to the home page
//     if (error === "AUTH_REQUIRED") {
//       $location.path("/home");
//     }
//   });
// }]);



// // app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
// //   // currentAuth (provided by resolve) will contain the
// //   // authenticated user or null if not signed in
// // }]);

// app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
//   // currentAuth (provided by resolve) will contain the
//   // authenticated user or throw a $routeChangeError (see above) if not signed in
// }]);
