app.controller('NewCtrl', function($scope, notesFactory) {
  if ($scope.text) {
    $scope.submit = notesFactory.setNotes($scope.newNote)
  }
})
