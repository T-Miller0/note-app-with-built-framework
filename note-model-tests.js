describe('Note', function() {
  it('is Note a string', function() {
    var noteObject = new Note('My favourite language is JavaScript');
    assert.isString(noteObject.returnNote())
  })

  it('creates and stores a note', function() {
    var noteList = new NoteList();
    noteList.create('Hello')
    noteList.create('second note')
    assert.isTrue(noteList.list[0].text === 'Hello')
    assert.isTrue(noteList.list[1].text === 'second note')
  })
})
