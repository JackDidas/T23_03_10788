function greetUser() {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  alert(greeting + " Feel free to contact me.");
}

function validateContactForm() {
  const phone = document.getElementById("phone").value;
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  return true;
}
