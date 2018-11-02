(function(exports) {
  function Note(text, id) {
    this.id = id;
    this.text = text;
  };
  Note.prototype.returnNote = function () {
    return this.text;
  };

  exports.Note = Note
})(this);



// function NoteModel() {
// // this.text = ''
// // }
// //
// // NoteModel.prototype.init = function (string) {
// //   this.text = string;
// // };
//
// (function(exports) {
// this.notes = ''
//
//   function note(string) {
//     this.notes = string
//     return this.notes;
//   };
//
//   exports.note = note;
// })(this);
