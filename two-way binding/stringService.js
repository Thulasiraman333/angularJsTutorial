myApp.factory('stringService', () => {
  return {
    processString: function (input) {
      if (!input) return input;
      var output = "";
      let strData = input.split('');
      console.log(strData);
      strData.forEach((ele, index) => {
        if (index > 0 && ele == ele.toUpperCase()) {
          output = output + " ";
          output = output + ele;
        } else {
          output = output + ele;
        }
      });
      return output;
    }
  }
})