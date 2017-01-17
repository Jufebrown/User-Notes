/*************************************************
variable declaration
*************************************************/

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



/*************************************************
angular
*************************************************/
app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/', {
    controller: 'SplashCtrl',
    templateUrl: 'partials/splash.html'
  })
  .when('/login', {
    controller: 'LoginCtrl',
    templateUrl: 'partials/login.html'
  })
  .when('/register', {
    controller: 'RegisterCtrl',
    templateUrl: 'partials/register.html'
  })
  .when('/notes', {
    controller: 'NotesCtrl',
    templateUrl: 'partials/notes.html'
  })
  .when('/new', {
    controller: 'NewCtrl',
    templateUrl: 'partials/new.html'
  })
  .otherwise({redirectTo:'/'});
})

app.controller('MainCtrl', function($scope) {
  $scope.potatoes = 'baked!'
})

app.controller('rt1Ctrl', function($scope) {
  $scope.picAddress = "http://cdn.fishki.net/upload/post/201407/18/1286305/004.jpg"
  $scope.highwayName = 'US Route 1'
})

app.controller('rt101Ctrl', function($scope) {
  $scope.picAddress = "http://cdn.newsday.com/polopoly_fs/1.10666555.1437659497!/httpImage/image.JPG_gen/derivatives/display_960/image.JPG"
  $scope.highwayName = 'US Route 101'
})
