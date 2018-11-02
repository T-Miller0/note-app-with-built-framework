var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    }
    console.log("%c Test passed! Its the same, Well Done!", "color:green")
  },

  isString: function (string) {
    if(!typeof string === typeof "" || !typeof string === typeof '') {
      throw new Error(string + ", Should be a String!");
    } else {
      console.log("%c Test passed! It is a String!", "color:green");
    }
  },

  isArray: function (array) {
    if(!typeof array === typeof []) {
      throw new Error("Should be an array")
    } else {
      console.log ("%c Test passed! Is an array", "color:green")
    }
  }
}
