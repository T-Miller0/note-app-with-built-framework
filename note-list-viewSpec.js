describe('note list view', function() {
  it('list notes', function() {
    var noteList = new NoteList();
    noteList.create('Hooo')
    noteList.create('Raayy')
    var noteListView = new NoteListView(noteList)
    assert.isString(noteListView.listNotes())
  })

  it('note into Html line', function() {
    var noteList = new NoteList();
    noteList.create("first note")
    noteList.create("second note")
    var view = new NoteListView(noteList)
    var htmlString = "<ul><li><div>first note</div></li><li><div>second note</div></li></ul>"
    assert.isTrue(view.htmlStringify() === htmlString)
  })
})
