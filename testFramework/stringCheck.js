(function (exports) {
    function isString(string) {
      if(!typeof string === typeof "" || !typeof string === typeof '') {
        throw new Error("String should be the same")
      } else {
        console.log("%c Test passed! It is a String", "color:green")
    }
  }
  exports.isString = isString;
})(this);
