app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
  // .when('/', {
  //   controller: 'SplashCtrl',
  //   templateUrl: 'partials/splash.html',
  //   resolve: {
  //     // controller will not be loaded until $waitForSignIn resolves
  //     // Auth refers to our $firebaseAuth wrapper in the factory below
  //     "currentAuth": ["Auth", function(Auth) {
  //       // $waitForSignIn returns a promise so the resolve waits for it to complete
  //       return Auth.$waitForSignIn();
  //     }]
  //   }
  // })
  // .when('/login', {
  //   controller: 'LoginCtrl',
  //   templateUrl: 'partials/login.html'
  // })
  // .when('/register', {
  //   controller: 'RegisterCtrl',
  //   templateUrl: 'partials/register.html'
  // })
  .when('/', {
    controller: 'NotesCtrl',
    templateUrl: 'partials/notes.html'
  })
  .when('/new', {
    controller: 'NewCtrl',
    templateUrl: 'partials/new.html'
  })
  // .when("/account", {
  //   // the rest is the same for ui-router and ngRoute...
  //   controller: "AccountCtrl",
  //   templateUrl: "views/account.html",
  //   resolve: {
  //     console.log('account')
  //     // controller will not be loaded until $requireSignIn resolves
  //     // Auth refers to our $firebaseAuth wrapper in the factory below
  //     "currentAuth": ["Auth", function(Auth) {
  //       // $requireSignIn returns a promise so the resolve waits for it to complete
  //       // If the promise is rejected, it will throw a $routeChangeError (see above)
  //       return Auth.$requireSignIn();
  //     }]
  //   }
  // })
  .otherwise({redirectTo:'/'});
})
