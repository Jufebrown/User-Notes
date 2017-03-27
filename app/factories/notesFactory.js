app.factory('notesFactory', function($http){
  return {
    getNotes: () => {
      return $http.get(`https://user-notes-74f00.firebaseio.com/.json`)
      .then((value) => {
        console.log(value)
        return value.data
      })
    },
    setNotes: (data) => {
      $http.post(`https://user-notes-74f00.firebaseio.com/.json`, { "note" : data })
    }
  }
})
