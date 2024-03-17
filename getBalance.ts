import { PublicKey } from "@solana/web3.js";
import "dotenv/config";

// Refer to package.json on how to run this script
const main = async () => {
  // Add your public key here. You can find it in your phantom wallet
  const publicKey = new PublicKey("");

  // Set the connection to Devnet
  // const CONNECTION = new Connection("");

  // const walletBalance = await CONNECTION.getBalance();

  // Don't forget to log the wallet balance
  // console.log(`Account: ${publicKey} has ${accountBalance} SOL`);
};

main();
