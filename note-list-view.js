(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

NoteListView.prototype.listNotes = function () {
  this.noteList.list.join(',\n')
  }

  NoteListView.prototype.truncate = function(note) {
    if (note.length > 20) {
      return `${note.slice(0,20)}`
    } else {
      return note;
    }
  }

  NoteListView.prototype.htmlStringify = function() {
    var notesArray = this.noteList.viewAll();
    var htmlString = "<ul>"
    for (var i = 0; i < notesArray.length; i++) {
      let message = this.truncate(notesArray[i].returnNote())
      htmlString += `<li><div><a href="#notes/${notesArray[i].id}">${message}</a></div></li>`
    }
      htmlString += "</ul>"
      return htmlString
  }
  exports.NoteListView = NoteListView;
})(this)
