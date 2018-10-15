// function NoteModel() {
// this.text = ''
// }
//
// NoteModel.prototype.init = function (string) {
//   this.text = string;
// };

(function(exports) {
this.notes = ''

  function note(string) {
    this.notes = string
    return this.notes;
  };

  exports.note = note;
})(this);

(function(exports) {
  this.list = []

  function noteList() {
    this.list.push(note(string))
  }
  exports.noteList = noteList;
})(this);
