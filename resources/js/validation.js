import {connectWallet, approveDAI, mintNFT, getDAIAllowance, web3, mintEvent } from "./eth_code";

// Function to validate an email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate a form
function validateForm(form) {
    let isValid = true;

    form.find("input").each(function() {
        const input = $(this);
        const isEmpty = input.val().trim() === '';
        const isInvalidEmail = input.attr('type') === 'email' && !validateEmail(input.val());

        if ((input.attr('required') || isEmpty) ||
            (input.attr('type') === 'email' && !isEmpty && isInvalidEmail)) {
            isValid = false;
            input.addClass('is-danger');
        } else {
            input.removeClass('is-danger');
        }
    });

    return isValid;
}



$(document).ready(function() {

    $('#connectWalletButton').on('click', function() {
        connectWallet();
    });

    const mintForm = $('#mint form');
    const redeemForm = $('#redeem form');

    if (mintForm.length > 0) {
        mintForm.on('submit', async function(event) {
            event.preventDefault();

            if (!validateForm(mintForm)) {
                return; // Form is not valid, stop here
            }

            //connect to MetaMask
            const walletConnected = await connectWallet();
            if(!walletConnected) {
                return;
            }

            let NFT_COST = '1'; //for allowance only so it can stay front end
            let cost= web3.utils.toWei(NFT_COST, 'ether');
            let allowance = await getDAIAllowance();
            // Then, the user can mint the NFT
            if(allowance < cost) {
                 // First, the user approves the DAI transfer
                await approveDAI(cost);
            }

            let tx_hash = await mintNFT();

            mintEvent().then(nft_id => {
                if (nft_id && tx_hash) {
                    // Set the value of the hidden input fields
                    $('#nft_id').val(nft_id);
                    $('#tx_hash').val(tx_hash);

                    // Submit the form
                    mintForm.off('submit').submit();
                }
            }).catch(error => {
                console.error("Error in mintEvent:", error);
                // Handle error appropriately
            });


        });
    }

    if (redeemForm.length > 0) {
        redeemForm.on('submit', function(event) {
            if (!validateForm(redeemForm)) {
                event.preventDefault();
            }

            //nftContract.methods.approve(contractAddress, tokenId).send({ from: userAddress });

        });
    }
});