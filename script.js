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