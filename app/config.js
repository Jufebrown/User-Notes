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
