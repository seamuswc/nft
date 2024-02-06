import config from "./config";
import dai from "./dai";

export let web3;
export let userAddress;

async function switchToArbitrum() {
    const arbitrumParams = {
        chainId: '0xa4b1', // Arbitrum One's chain ID in hexadecimal
        chainName: 'Arbitrum One',
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io/']
    };

    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: arbitrumParams.chainId }],
        });
        return true;
    } catch (error) {
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [arbitrumParams],
                });
                return true;
            } catch (addError) {
                console.error('Failed to add Arbitrum network', addError);
                return false;
            }
        } else {
            console.error('Failed to switch to Arbitrum network', error);
            return false;
        }
    }
}

export async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);

        const switched = await switchToArbitrum();
        if (!switched) {
            alert("Failed to switch to or add Arbitrum network!");
            return false;
        }

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            console.log("ADDRESS: ", userAddress);

            // Assuming that the switch was successful, the network should now be Arbitrum
            $("#walletAddress").text(userAddress);
            $('#networkConnected').text("Arbitrum");

            return true;
        } catch (error) {
            console.error("User denied account access");
            return false;
        }
    } else {
        console.error("Ethereum browser not detected!");
        return false;
    }
}

const daiContract = new web3.eth.Contract(dai.ABI, dai.CONTRACT_ADDRESS);
export async function approveDAI(amount) {


    let estimatedGas = await daiContract.methods.approve(dai.CONTRACT_ADDRESS, amount).estimateGas({ from: userAddress });

    await daiContract.methods.approve(config.CONTRACT_ADDRESS, amount).send({ from: userAddress, gas: estimatedGas });
}

const nftContract = new web3.eth.Contract(config.ABI, config.CONTRACT_ADDRESS);
export async function mintNFT() {

    let estimatedGas = await nftContract.methods.mintNFT().estimateGas({ from: userAddress });

    let tx = await nftContract.methods.mintNFT().send({ from: userAddress, gas: estimatedGas });
    let txHash = tx.transactionHash;

    return txHash;
}

export function mintEvent() {
    return new Promise((resolve, reject) => {
        nftContract.events.NFTMinted({
            filter: { user: userAddress },
            fromBlock: 'latest'
        })
        .on('data', function(event) {
            console.log('NFT Minted:', event.returnValues);
            resolve(event.returnValues.tokenId); // Assuming tokenId is the key you're interested in
        })
        .on('error', error => reject(error));
    });
}



export async function getDAIAllowance() {
    try {
        const daiContract = new web3.eth.Contract(dai.ABI, dai.CONTRACT_ADDRESS);
        const allowance = await daiContract.methods.allowance(userAddress, config.CONTRACT_ADDRESS).call();
        console.log("Allowance:", allowance);
        return allowance;
    } catch (error) {
        console.error("Error in checking DAI allowance:", error);
        throw error; // or return some error indicator
    }
}
