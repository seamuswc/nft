import config from "./config.js";


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

    async function setAllowance(tokenContractAddress, spenderAddress, amount) {
        if (!window.ethereum) {
            alert('MetaMask is not installed!');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tokenContract = new ethers.Contract(tokenContractAddress, config.ABI, signer);

        try {
            const tx = await tokenContract.approve(spenderAddress, amount);
            await tx.wait();
            alert(`Allowance set successfully! Transaction Hash: ${tx.hash}`);
        } catch (error) {
            console.error('Error setting allowance:', error);
            alert('Failed to set allowance.');
        }
    }

    if (mintForm) {
        mintForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            if (!validateForm(mintForm)) {
                return; // Form is not valid, stop here
            }

            // Fetch form data
            const ethereumAddress = document.querySelector('input[name="ethereum_address"]').value;

            // Connect to Ethereum Wallet
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const spenderAddress = await signer.getAddress();

            // Define your smart contract
            const contractAddress = config.CONTRACT_ADDRESS;
            const abi = config.ABI;
            const tokenURI = config.TOKEN_URI;
            const contract = new ethers.Contract(contractAddress, abi, signer);
            const usdc_address = "0xaf88d065e77c8cc2239327c5edb3a432268e5831";
            const tokenAmount = '1000000'; // Represents 1 USDC


            try {
                await setAllowance(usdc_address, spenderAddress, tokenAmount)
                // Call the smart contract function
                const tx = await contract.mintNFT(ethereumAddress, tokenURI);
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
                /*.then(data => {
                    //console.log('Success:', data);
                    //alert("NFT Minted and Form Submitted Successfully!");
                })*/
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Form submission failed");
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
});
