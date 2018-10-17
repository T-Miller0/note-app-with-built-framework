(function (exports) {
  function NoteController(noteList = new NoteList()) {
    noteList.create("Favourite drink: seltzer")
    this.noteListView = new NoteListView(noteList)
  }
  NoteController.prototype.insertNoteIntoHtml = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.noteListView.htmlStringify();
  };

exports.NoteController = NoteController;
})(this)




// var element = document.getElementById('app')
// element.innerHTML = "howdy"
// console.log(element)
