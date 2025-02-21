
function validateRegistrationForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email address');
    return false;
  }
  if (username.length < 3) {
    alert('Username must be at least 3 characters long');
    return false;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert('Password must be at least 8 characters long and include uppercase letters, lowercase letters, digits, and special characters');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Password and Confirm Password must match');
    return false;
  }

  return true;
}