const apiUrl = "/contacts";

document.addEventListener("DOMContentLoaded", loadContacts);

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  if (!form.checkValidity()) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Preencha todos os campos");
    return;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone }),
  });

  if (response.ok) {
    loadContacts();
    document.getElementById("contactForm").reset();
  } else {
    alert("Erro ao adicionar contato");
  }
});

async function loadContacts() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const list = document.getElementById("contactList");
  list.innerHTML = "";
  data.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.name} - ${c.email} - ${c.phone}`;
    list.appendChild(li);
  });
}
