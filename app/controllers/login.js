app.controller('LoginCtrl', function($scope, Auth) {
  $scope.login = (credentials) => {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
    })
    .then(() => {
      $('form')[0].reset()
    })
  }
})
