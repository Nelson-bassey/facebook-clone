// === this code is for the friends suggestion section ===

    const friends = [
      { name: "John Deo", img: "" },
      { name: "Jane Wilson"},
      { name: "Elijah Gentility", img: "https://i.pravatar.cc/150?img=7" },
      { name: "David Fame", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Trinity Pablo", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Wisdom Simon", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Kalita Ov Cali", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Nippy Jay", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Elvis Cruz", img: "https://i.pravatar.cc/150?img=7" },
      { name: "Nelbe De Tech", img: "https://i.pravatar.cc/150?img=7" },
      
    ];

    const container = document.getElementById('friendSuggestions');

    friends.forEach(f => {
      const div = document.createElement('div');

      div.className = 'friend';
      div.innerHTML = `
        <span>${f.name},</span>
        <button onclick="this.innerText='Added'; this.disabled=true;">Add Friend</button>
      `;
      container.appendChild(div);
    });

    loadPosts();


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