document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const note = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    };
  
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      window.location.href = "index.html";
    });
  });
  