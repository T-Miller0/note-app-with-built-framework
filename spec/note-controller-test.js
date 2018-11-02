describe('Controller test', function() {
  it('can be instantiated', function() {
    var noteController = new NoteController();
    assert.isTrue(noteController instanceof NoteController)
  })
  it('Mocks an insert note into html', function() {
    console.log("test starts now")
    function NoteViewDouble() {};
    // Mocking!!
    NoteViewDouble.prototype.htmlStringify = function() {
      console.log("Hiya")
      return '<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>'
    }

    var noteList = new NoteList();
    noteList.create("Favourite food: pesto")
    var noteController = new NoteController(noteList, NoteViewDouble);
    noteController.insertNoteIntoHtml();
    var element = document.getElementById('app');
    var expectedString = '<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>'
    assert.isTrue(element.innerHTML === expectedString)
  })
  it('Stub, insert note into html', function() {
    // Spy
    // Stub
    function NoteListDouble() {
      this.addNoteCallCount = 0;
    };
    // Spy on #create method
    NoteListDouble.prototype.create = function() {
      this.addNoteCallCount ++;
    }
// Mock
  // Stub
    function NoteViewDouble() {};

      // Mockcing method in Stub
      NoteViewDouble.prototype.htmlStringify = function () {
        return `<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>`
      };

    var noteListDouble = new NoteListDouble();
    // noteList.create("Favourite food: pesto")
    var noteController = new NoteController(noteListDouble, NoteViewDouble);
    window.onload = function(){
    noteController.insertNoteIntoHtml();
    var element = document.getElementById('app');
    var expectedString = '<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>'
    assert.isTrue(element.innerHTML === expectedString)
    assert.isTrue(noteListDouble.addNoteCallCount === 1)
    }
  })
})
