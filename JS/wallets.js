document.addEventListener('DOMContentLoaded', function() {
    const addWalletForm = document.getElementById('addWalletForm');
    const walletList = document.querySelector('.container');

    // Function to attach delete functionality to a delete button
    function attachDeleteFunctionality(deleteBtn, item) {
        deleteBtn.addEventListener('click', function() {
            try {
                item.remove();
            } catch (error) {
                console.error('Error removing item:', error);
            }
        });
    }

    // Attach delete functionality to existing wallet items
    const existingItems = document.querySelectorAll('.item');
    existingItems.forEach(item => {
        const deleteBtn = item.querySelector('.delete-btn');
        attachDeleteFunctionality(deleteBtn, item);
    });

    // Handle add wallet form
    addWalletForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const walletName = document.getElementById('wallet-name').value;
        const walletBalance = document.getElementById('wallet-balance').value;
        const walletImage = document.getElementById('wallet-image').files[0];

        const reader = new FileReader();

        reader.onload = function(e) {
            const imageSrc = e.target.result;

            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
                <img src="${imageSrc}" alt="Wallet Image">
                <div class="item-details">
                    <p>${walletName}</p>
                    <p class="detail">Balance: $${walletBalance}</p>
                </div>
                <button class="delete-btn" type="button">🗑️</button>
            `;

            // Add delete functionality to new item
            const deleteBtn = newItem.querySelector('.delete-btn');
            attachDeleteFunctionality(deleteBtn, newItem);

            walletList.insertBefore(newItem, addWalletForm.parentElement);
            addWalletForm.reset();
            document.getElementById('image-preview').style.display = 'none';
        };

        if (walletImage) {
            reader.readAsDataURL(walletImage);
        } else {
            alert('Please upload an image for the wallet.');
        }
    });

    // Handle image preview
    document.getElementById('wallet-image').addEventListener('change', function(event) {
        const imagePreview = document.getElementById('image-preview');
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            imagePreview.style.display = 'block';
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = 'none';
        }
    });
});