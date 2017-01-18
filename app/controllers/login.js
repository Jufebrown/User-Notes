app.controller('rt1Ctrl', function($scope) {
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
