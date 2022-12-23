const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;


  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
    return passwordRegex.test(password);
  }



  if (email == "") {
    alert("Please enter an email address.");
    return false;
  }

  if (!isEmailValid(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!isPasswordValid(password)) {
    alert("Password must be at least 8 characters long and contain at least one number and one capital letter.");
    return false;
  }


  form.submit();
}

  
