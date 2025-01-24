import { ethers } from "ethers";

export default function SendCrypto() {
  const sendCrypto = async () => {
    // Example: Connect wallet and send Ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const tx = await signer.sendTransaction({
      to: "0xRecipientAddress", // Replace with recipient's address
      value: ethers.utils.parseEther("0.01"), // Amount to send
    });

    console.log("Transaction successful:", tx);
  };

  return <button onClick={sendCrypto}>Send Crypto</button>;
}
