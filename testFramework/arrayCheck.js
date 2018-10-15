(function (exports) {
    function isArray(array) {
      if(!typeof array === typeof []) {
        throw new Error("Should be an array")
      } else {
        console.log ("%c Test passed! Is an array", "color:green")
    }
  }
  exports.isArray = isArray;
})(this);
