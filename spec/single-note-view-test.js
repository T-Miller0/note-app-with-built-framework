describe('Single Note view', function() {
    function MockNote() {};

    MockNote.prototype.returnNote = function() {
      return "Favourite drink: seltzer"
    }
    var mockNote = new MockNote();
    var singleNoteView = new SingleNoteView(mockNote);

    it('can instantiate single note object', function() {
      assert.isTrue(singleNoteView instanceof SingleNoteView)
    });

    it('Mocks SingleNoteView', function() {
    assert.isTrue(singleNoteView.viewNoteInHtml() === "<div>Favourite drink: seltzer</div>")
  })

})
