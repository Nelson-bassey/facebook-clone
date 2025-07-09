// File: signup.js
   const form = document.getElementById('signupForm');

    form.addEventListener('SignUp', function (e) {
      e.preventDefault();
      const firstName = document.getElementById('firstname').value.trim();
      const lastName = document.getElementById('lasttname').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirm = document.getElementById('confirm').value;

      if (password !== confirm) {
        alert('Passwords do not match!');
        return;
      }

      const user = { firstName, lastName, email, password };
      localStorage.setItem('neltech_user', JSON.stringify(user));
      alert('Signup successful! Redirecting to login...');
      window.location.href='login.html';
    });