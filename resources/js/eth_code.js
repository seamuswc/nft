
import { ethers } from 'ethers';

export let provider;
export let signer;
export let account;

export async function get_wallet() {
    try {
        await switchToArbitrum();
        // Connect to Ethereum Wallet
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        account = await signer.getAddress(); 
        console.log("metamask connected")
    } catch (error) {
            console.error('Error in get_wallet:', error);
            // Handle the error appropriately
    }
}

async function switchToArbitrum() {
    try {
        // Check if MetaMask is installed
        if (window.ethereum) {
            // Arbitrum Mainnet Parameters
            const arbitrumParams = {
                chainId: '0xa4b1', // Hexadecimal chainId of the Arbitrum network
                chainName: 'Arbitrum One',
                nativeCurrency: {
                    name: 'Ether',
                    symbol: 'ETH', // Typically, the native currency symbol is ETH on L2s
                    decimals: 18
                },
                rpcUrls: ['https://arb1.arbitrum.io/rpc'], // The RPC URL of Arbitrum Mainnet
                blockExplorerUrls: ['https://arbiscan.io/']
            };

            // Switch to Arbitrum network
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: arbitrumParams.chainId }],
            }).catch(async (switchError) => {
                // This error code indicates that the chain has not been added to MetaMask
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [arbitrumParams],
                        });
                    } catch (addError) {
                        // Handle errors when adding the Arbitrum network
                        console.error(addError);
                    }
                } else {
                    // Handle other errors
                    console.error(switchError);
                }
            });
        } else {
            alert('MetaMask is not installed!');
        }
    } catch (error) {
        console.error(error);
    }
}
