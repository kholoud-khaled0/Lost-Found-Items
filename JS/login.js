document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (username === '') {
      alert('Please enter a username.');
      usernameInput.focus();
      return;
    }

    if (password === '') {
      alert('Please enter a password.');
      passwordInput.focus();
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      passwordInput.focus();
      return;
    }

    // Simulate login process
    simulateLogin(username, password);
  });

  function simulateLogin(username, password) {
    // This is a mock function to simulate a login request
    // In a real application, this would be an API call to a backend
    console.log('Attempting login with:', { username, password });

    // Simulate a successful login
    setTimeout(() => {
      alert('Login successful! Redirecting...');
      // Redirect to a dashboard or home page (adjust URL as needed)
      window.location.href = '../pages/home.html';
    }, 1000);
  }
});