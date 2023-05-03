function validateForm() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
        alert("Please, fill all required answers");
        return false;
      }
    }
    
    const form = document.querySelector('.piska');
    const formData = new FormData(form);
    const selectedRadioButtons = form.querySelectorAll('input[type="radio"]:checked');

    selectedRadioButtons.forEach(button => {
      formData.append(button.name, button.value);
    });

    const name = document.querySelector("#name"); 
    const surname = document.querySelector("#Surname");
    const email = document.querySelector("#email");

    formData.append("name", name.value);
    formData.append("surname", surname.value);
    formData.append("email", email.value);

    xhr.open('POST', 'save-answers.php');
    xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Данные успешно сохранены');
      form.reset(); // Очищаем форму
    } else {
      alert('Произошла ошибка');
    }
    };
    xhr.send(data);
}
  