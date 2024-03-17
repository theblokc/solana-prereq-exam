import { PublicKey } from "@solana/web3.js";
import "dotenv/config";

// Refer to package.json on how to run this script
const main = async () => {
  // Add your public key here. You can find it in your phantom wallet
  const publicKey = new PublicKey("");

  // Set the connection to Devnet
  // const CONNECTION = new Connection("");

  // You can use the connection instance to airdrop to a certain wallet. HINT: "requestAirdrop"
  // Another HINT: requestAirdrop will return the signature

  // const { blockhash, lastValidBlockHeight } = CONNECTION.getLatestBlockhash();
  // return await CONNECTION.confirmTransaction({
  //   blockhash: blockhash,
  //   lastValidBlockHeight: lastValidBlockHeight,
  //   signature,
  // });

  // Don't forget to log the signature to string so you can check the transaction status in the Solana Explorer
  // console.log(``);
};

main();
