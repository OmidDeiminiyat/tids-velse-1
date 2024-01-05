

function validateForm() {
    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('surError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('genPassError').textContent = '';
    
    // Get form values
    var username = document.getElementById('username').value;
    var surName = document.getElementById('surName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genPass = document.getElementById('genPass').value;

    // Validate username
    if (!username) {
      document.getElementById('usernameError').textContent = 'Username is required';
      username.style.border= 'red';
      return; // Do not proceed with form submission
    } else if (username.length < 2) {
        document.getElementById('usernameError').textContent = 'Name must be more than one letter.';
        return; // Do not proceed with form submission
    }

    if (!surName) {
        document.getElementById('surError').textContent = 'Surname is required';
        surName.style.border= 'red';
        return; // Do not proceed with form submission
      } else if (surName.length < 2) {
          document.getElementById('surError').textContent = 'Surname must be more than one letter.';
          return; // Do not proceed with form submission
      }



    // Validate email
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required';
      return; // Do not proceed with form submission
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      return; // Do not proceed with form submission
    }

    // Validate password
    if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required';
      return; // Do not proceed with form submission
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
      return; // Do not proceed with form submission
    }

    if (genPass != password) {
        document.getElementById('genPassError').textContent = 'Password is not match';
        return; // Do not proceed with form submission
      }
    var message = " Form submited succesfully. " + " " + "Your name:" + username + ". " + "Your email: " + email + " ";
    // If all validations pass, you can perform additional actions or submit the form data
    alert(message);
    document.getElementById('main-form').textContent = '';
}
function isValidEmail(email) {
    // Simple email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


