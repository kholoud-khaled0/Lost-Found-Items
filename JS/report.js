document.getElementById('item').addEventListener('change', function() {
    const otherItemDiv = document.querySelector('.other-item');
    const otherItemInput = document.getElementById('other-item');
    if (this.value === 'other') {
        otherItemDiv.style.display = 'block';
        otherItemInput.setAttribute('required', true);
    } else {
        otherItemDiv.style.display = 'none';
        otherItemInput.removeAttribute('required');
    }
});

document.getElementById('location').addEventListener('change', function() {
    const otherLocationDiv = document.querySelector('.other-location');
    const otherLocationInput = document.getElementById('other-location');
    if (this.value === 'other') {
        otherLocationDiv.style.display = 'block';
        otherLocationInput.setAttribute('required', true);
    } else {
        otherLocationDiv.style.display = 'none';
        otherLocationInput.removeAttribute('required');
    }
});


document.getElementById('photo').addEventListener('change', function(e) {
    const preview = document.getElementById('preview');
    const file = e.target.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
});

document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const studentId = document.getElementById('studentId').value;
    const item = document.getElementById('item').value;
    const otherItem = document.getElementById('other-item').value;
    const location = document.getElementById('location').value;
    const otherLocation = document.getElementById('other-location').value;
    const description = document.getElementById('description').value;
    const dateLost = document.getElementById('dateLost').value;


    if (!name) {
        showAlert('Please enter your name.');
        return;
    }

    if (!phone) {
        showAlert('Phone number is required.');
        return;
    }

  
    const phoneLength = phone.length;
    const validPrefixes = ['010', '011', '012', '015'];
    const phonePrefix = phone.substring(0, 3);
    
    const isLengthValid = phoneLength === 11 && /^\d+$/.test(phone);
    const isPrefixValid = validPrefixes.includes(phonePrefix);

    if (!isLengthValid && !isPrefixValid) {
        showAlert('Invalid phone number! It must be 11 digits and start with 010, 011, 012, or 015 (e.g., 01012345678).');
        return;
    } else if (!isLengthValid) {
        showAlert('Invalid phone number! It must be exactly 11 digits (e.g., 01012345678).');
        return;
    } else if (!isPrefixValid) {
        showAlert('Invalid phone number! It must start with 010, 011, 012, or 015.');
        return;
    }

    if (!studentId) {
        showAlert('Please enter your student ID.');
        return;
    }

    if (!item) {
        showAlert('Please select an item.');
        return;
    }

    if (item === 'other' && !otherItem) {
        showAlert('Please specify the item.');
        return;
    }

    if (!location) {
        showAlert('Please select a location.');
        return;
    }

    if (location === 'other' && !otherLocation) {
        showAlert('Please specify the location.');
        return;
    }

    if (!description) {
        showAlert('Please provide a description of the item.');
        return;
    }

    if (!dateLost) {
        showAlert('Please select the date you lost the item.');
        return;
    }


    showAlert('Your report has been submitted successfully! We’ll Contact you soon.');
    document.getElementById('reportForm').reset();
    document.querySelector('.other-item').style.display = 'none';
    document.querySelector('.other-location').style.display = 'none';
    document.getElementById('preview').style.display = 'none';
});

function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertBox.classList.add('active');
    document.body.classList.add('alert-active');
}

function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.classList.remove('active');
    document.body.classList.remove('alert-active');
}