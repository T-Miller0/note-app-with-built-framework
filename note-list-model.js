(function(exports) {
  function NoteList() {
    this.idtracker = 0;
    this.list = [];
}

NoteList.prototype.viewAll = function () {
  return this.list
};

NoteList.prototype.create = function (text) {
  var note = new Note(text, this.idtracker);
  this.list.push(note);
  this.idtracker ++;
};
  exports.NoteList = NoteList;
})(this);
