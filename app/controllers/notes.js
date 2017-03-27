app.controller('NotesCtrl', function($scope, notesFactory) {
  $scope.notes = notesFactory.getNotes()
  .then((val) => {
    console.log('val from listctrl', val)
    $scope.list = val.list
  })
})
