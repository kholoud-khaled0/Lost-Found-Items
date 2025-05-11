document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const department = document.getElementById('department');
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        let errorMessage = '';
  
        // Username validation
        if (username.value.trim().length < 3) {
            isValid = false;
            errorMessage += 'Username must be at least 3 characters long.\n';
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) { // delete spaces before and after email 
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }
  
        // Phone validation
        const phoneValue = phone.value.trim();
        if (!phoneValue) {
            isValid = false;
            errorMessage += 'Phone number is required.\n';
        } else {
            const phoneLength = phoneValue.length;
            const validPrefixes = ['010', '011', '012', '015'];
            const phonePrefix = phoneValue.substring(0, 3);// check frist 3 elements  0 => 2
            const isLengthValid = phoneLength === 11 && /^\d+$/.test(phoneValue);// = 11 number and only numbers not characters 
            const isPrefixValid = validPrefixes.includes(phonePrefix);
  
            if (!isLengthValid && !isPrefixValid) {
                isValid = false;
                errorMessage += 'Invalid phone number! It must be 11 digits and start with 010, 011, 012, or 015 (e.g., 01012345678).\n';
            } else if (!isLengthValid) {
                isValid = false;
                errorMessage += 'Invalid phone number! It must be exactly 11 digits (e.g., 01012345678).\n';
            } else if (!isPrefixValid) {
                isValid = false;
                errorMessage += 'Invalid phone number! It must start with 010, 011, 012, or 015.\n';
            }
        }
  
        // Password validation
        if (password.value.length < 8) {
            isValid = false;
            errorMessage += 'Password must be at least 8 characters long.\n';
        }
  
        // Confirm password validation
        if (password.value !== confirmPassword.value) {
            isValid = false;
            errorMessage += 'Passwords do not match.\n';
        }
  
        // Department validation
        if (!department.value) {
            isValid = false;
            errorMessage += 'Please select a department.\n';
        }
  
        if (!isValid) {
            alert(errorMessage);
            return;
        }
  
        // If all validations pass, simulate form submission
        const formData = {
            username: username.value.trim(),
            email: email.value.trim(),
            phone: phoneValue,
            password: password.value,
            department: department.value
        };
  
        console.log('Form submitted successfully:', formData);
        alert('Registration successful!');
        window.location.href = 'login.html';
        // Reset form after submission
        form.reset();
    });
  
    // Real-time password matching feedback
    confirmPassword.addEventListener('input', function() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.style.border = '2px solid red';

        } else {
            confirmPassword.style.border = '2px solid green';
        }
    });
  });