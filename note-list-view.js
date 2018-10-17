(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

NoteListView.prototype.listNotes = function () {
  this.noteList.list.join(',\n')
  }

  NoteListView.prototype.htmlStringify = function() {
    var notesArray = this.noteList.viewAll();
    var htmlString = "<ul>"
    for (var i = 0; i < notesArray.length; i++) {
      htmlString += "<li><div>" + notesArray[i].returnNote() + "</div></li>"
    }
      htmlString += "</ul>"
      return htmlString
  }
  exports.NoteListView = NoteListView;
})(this)
