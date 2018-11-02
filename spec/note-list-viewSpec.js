describe('note list view', function() {
  it('list notes', function() {
    var noteList = new NoteList();
    noteList.create('Hooo')
    noteList.create('Raayy')
    var noteListView = new NoteListView(noteList)
    assert.isString(noteListView.listNotes())
  })
  it('viewing a note in Html', function() {
    var noteList = new NoteList();
    noteList.create("first note")
    noteList.create("second note")
    var view = new NoteListView(noteList)
    var htmlString = '<ul><li><div><a href="#notes/0">first note</a></div></li><li><div><a href="#notes/1">second note</a></div></li></ul>'
    assert.isTrue(view.htmlStringify() === htmlString)
  })

  it('#truncate, shows max 20 charaters', function() {
    var message = "I need to be less than twenty charaters"
    var noteListView = new NoteListView()
    assert.isTrue(noteListView.truncate(message))
  })
})
