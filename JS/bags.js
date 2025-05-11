const form = document.getElementById("addBadgeForm");
const itemList = document.getElementById("itemList");

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
      <button class="delete-btn">🗑️</button>
      <img src="${imageSrc}" alt="New Found Badge">
      <div class="item-details">
        <p>Badge</p>
        <p class="detail">Found at ${locationInput} on ${dateInput}</p>
      </div>
    `;

    newItem.querySelector(".delete-btn").addEventListener("click", function () {
      newItem.remove();
    });

    itemList.appendChild(newItem);

    form.reset();
    document.getElementById("imagePreview").style.display = "none";
  };

  reader.readAsDataURL(file);
});

document.getElementById("image").addEventListener("change", function (event) {
  const preview = document.getElementById("imagePreview");
  const file = event.target.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});