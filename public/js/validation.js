document.addEventListener("DOMContentLoaded", function() {
    const mintForm = document.querySelector('#mint form');
    const redeemForm = document.querySelector('#redeem form');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateEthereumAddress(address) {
        const re = /^0x[a-fA-F0-9]{40}$/;
        return re.test(address);
    }

    function validateForm(form) {
        let isValid = true;

        form.querySelectorAll("input").forEach(input => {
            const isEmpty = input.value.trim() === '';
            const isInvalidEmail = input.type === 'email' && !validateEmail(input.value);
            const isInvalidEthAddress = input.name === 'ethereum_address' && !validateEthereumAddress(input.value);
            
            if ((input.required || isEmpty) || 
                (input.type === 'email' && !isEmpty && isInvalidEmail) || 
                (input.name === 'ethereum_address' && !isEmpty && isInvalidEthAddress)) {
                isValid = false;
                input.classList.add('is-danger');
            } else {
                input.classList.remove('is-danger');
            }
        });

        return isValid;
    }

    if (mintForm) {
        mintForm.addEventListener('submit', function(event) {
            if (!validateForm(mintForm)) {
                event.preventDefault();
            }
        });
    }

    if (redeemForm) {
        redeemForm.addEventListener('submit', function(event) {
            if (!validateForm(redeemForm)) {
                event.preventDefault();
            }
        });
    }
});
