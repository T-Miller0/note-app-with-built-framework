function testNoteString () {
  var noteObject = new note('My favourite language is JavaScript');

  isString(noteObject.note);
};
testNoteString();

function testNoteListIsArray() {
  var notelist = new notelist()
  var noteobject = new note("hello")
  var noteObject1 = new note("goodbye")

  isArray(notelist.list)
}

testNoteListIsArray();
