function validateForm() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
        alert("Please, fill all required answers");
        return false;
      }
    }
    return true;
  }
  