import {connectWallet, approveDAI, mintNFT, getDAIAllowance, web3 } from "./eth_code";

// Function to validate an email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate an Ethereum address
/*
function validateEthereumAddress(address) {
    const re = /^0x[a-fA-F0-9]{40}$/;
    return re.test(address);
}*/

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

            let NFT_COST = '1'; //could user change this because js is front end? cant to a solidty view.call function
            let cost= web3.utils.toWei(NFT_COST, 'ether');
            let allowance = await getDAIAllowance();
            // Then, the user can mint the NFT
            if(allowance < cost) {
                 // First, the user approves the DAI transfer
                await approveDAI(cost);
            }

            await mintNFT();

            //traditonally submi form now
            mintForm.off('submit').submit();

        });
    }

    if (redeemForm.length > 0) {
        redeemForm.on('submit', function(event) {
            if (!validateForm(redeemForm)) {
                event.preventDefault();
            }
        });
    }
});