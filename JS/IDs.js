document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addIDForm');
    const itemList = document.getElementById('itemList');
    const imageInput = document.getElementById('image');
    const dateInput = document.getElementById('date');
    const locationInput = document.getElementById('location');
    const imagePreview = document.getElementById('imagePreview');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!imageInput.files[0] || !dateInput.value || !locationInput.value) {
        alert('Please fill in all required fields.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        const newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.innerHTML = `
          <img src="${e.target.result}" alt="Found ID">
          <div class="item-details">
            <p>ID</p>
            <p class="detail">Found at ${locationInput.value} on ${dateInput.value}</p>
          </div>
          <button class="delete-btn" title="Delete">🗑️</button>
        `;
        const deleteBtn = newItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
          newItem.remove();
        });
        itemList.insertBefore(newItem, itemList.firstChild);
        form.reset();
        imagePreview.src = '';
        imagePreview.style.display = 'none';
      };
      reader.readAsDataURL(imageInput.files[0]);
    });

    imageInput.addEventListener('change', function(e) {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none';
      }
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        this.parentElement.remove();
      });
    });
  });