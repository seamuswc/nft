import { ethers } from 'ethers';
import config from "./config.js";
import {get_wallet, signer, account} from "./eth_code.js"


document.addEventListener("DOMContentLoaded", function() {
    const mintForm = document.querySelector('#mint form');
    const redeemForm = document.querySelector('#redeem form');
    const csrfToken = mintForm.querySelector('input[name="_token"]').value;


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
        mintForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            if (!validateForm(mintForm)) {
                return; // Form is not valid, stop here
            }

            // Fetch form data
            //let ethereumAddress = document.querySelector('input[name="ethereum_address"]').value;

            const contractAddress = config.CONTRACT_ADDRESS;
            const abi = config.ABI;
            //const tokenURI = config.TOKEN_URI;
            const contract = new ethers.Contract(contractAddress, abi, signer);

            // Connect to Ethereum Wallet
            await get_wallet();
            //sets allowance for contract
            try {
                await contract.setAllowance(account, 1000000);
            } catch (error) {
                console.error(error);
                return;
            }

            try {
                
                // Call the smart contract function mintNFT
                const tx = await contract.mintNFT();
                await tx.wait();

                // Form is valid and NFT is minted, submit form data using AJAX
                const formData = new FormData(mintForm);
                fetch('/mint', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Content-Type': 'application/json' // or 'application/x-www-form-urlencoded' etc., depending on your needs
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    //alert("Form submission failed");
                    return;
                });

            } catch (error) {
                console.error(error);
                alert("An error occurred while minting the NFT");
                return;
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

}); //end doc load
