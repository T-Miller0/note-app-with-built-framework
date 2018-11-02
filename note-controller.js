(function (exports) {
  function NoteController(noteList = new NoteList(), noteView = NoteListView) {
    noteList.create("Favourite drink: seltzer")
    this.noteListView = new noteView(noteList)
  }
  NoteController.prototype.insertNoteIntoHtml = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.noteListView.htmlStringify();
  };



exports.NoteController = NoteController;
})(this);



var noteController = new NoteController
noteController.insertNoteIntoHtml()
// var element = document.getElementById('app')
// element.innerHTML = "howdy"
// console.log(element)
