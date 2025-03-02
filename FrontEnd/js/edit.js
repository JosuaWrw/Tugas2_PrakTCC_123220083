const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

fetch(`http://localhost:3000/notes/${noteId}`)
  .then(response => response.json())
  .then(note => {
    document.getElementById("title").value = note.title;
    document.getElementById("content").value = note.content;
  });

document.getElementById("edit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const note = {
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
  };

  fetch(`http://localhost:3000/notes/${noteId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  }).then(() => {
    window.location.href = "index.html";
  });
});
