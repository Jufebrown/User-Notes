app.controller('rt1Ctrl', function($scope, Auth) {
  $scope.register = (credentials) => {
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
    })
    .then(() => {
    })
  }
})
