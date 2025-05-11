const form = document.getElementById("add-phone-form");
const itemList = document.getElementById("item-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("image");
  const dateInput = document.getElementById("date").value;
  const locationInput = document.getElementById("location").value;
  const file = fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    const imageSrc = event.target.result;

    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
      <img src="${imageSrc}" alt="New Found Phone">
      <div class="item-details">
        <p>Phone</p>
        <p class="detail">Found at ${locationInput} on ${dateInput}</p>
      </div>
      <button class="delete-btn">🗑️</button>
    `;

    newItem.querySelector(".delete-btn").addEventListener("click", function () {
      newItem.remove();
    });

    itemList.appendChild(newItem);
    form.reset();
    document.getElementById("preview").style.display = "none";
  };

  reader.readAsDataURL(file);
});

// Preview image
document.getElementById("image").addEventListener("change", function (event) {
  const preview = document.getElementById("preview");
  const file = event.target.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

// Delete buttons for initial items
document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});