const ethers = require("ethers");

// Provider
const providerMumbai = new ethers.JsonRpcProvider(
  "https://polygon-mumbai.g.alchemy.com/v2/FX3qHoCqEqesrN33uw-DmFEf70Jh3UiO"
);

// Signer
const myAccount = ""; // CHANGE WITH YOUR ACCOUNT
const myPrivateKey = ""; // CHANGE WITH YOUR PRIVATE KEY
const walletSigner = new ethers.Wallet(myPrivateKey, providerMumbai);

const exchangeMATIC = async () => {
  // Get eth Gas price
  const gasPrice = await providerMumbai.send("eth_gasPrice", []);

  const sendMATICInHuman = "0.03";
  const txBuild = {
    from: myAccount,
    to: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    nonce: 4,
    value: ethers.parseEther(sendMATICInHuman),
    gasLimit: 100000,
    gasPrice: gasPrice,
  };

  // SEND
  const txSend = await walletSigner.sendTransaction(txBuild);
  console.log("");
  console.log("SEND");
  console.log(txSend);
};

exchangeMATIC();
