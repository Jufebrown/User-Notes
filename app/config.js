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
  .otherwise({redirectTo:'/'});
})
