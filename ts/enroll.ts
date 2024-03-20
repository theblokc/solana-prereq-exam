import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import "dotenv/config";
import * as anchor from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { IDL } from "./idl";

// Refer to package.json on how to run this script
const main = async () => {
  // Add your public key here. You can find it in your phantom wallet

  const PROGRAM_ID = new PublicKey(
    "FDDbT6pAmifx3GffUhq67FZBEZp1ggYmhdiWwAoJRY5T"
  );

  // TODO: Set the connection to devnet
  // const CONNECTION = new Connection();

  // TODO: Setup your wallet.
  // This wallet will be used to sign the transaction. Make sure you have enough SOL.

  // const encoded = bs58.decode();
  // const MY_KEYPAIR = Keypair.fromSecretKey(encoded);
  // const WALLET = new NodeWallet(MY_KEYPAIR);

  // Anchor Provider is used to talk to the "Smart Contract" or as they say in Solana, "Programs"
  // const PROVIDER = new anchor.AnchorProvider(CONNECTION, WALLET, {});

  // TODO: Setup the EnrollProgram
  // It needs 3 arguments
  // IDL (Check the idl.ts file)
  // Program Id
  // Anchor Provider
  // const EnrollProgram = new anchor.Program();

  // TODO: Get the PDA
  // findProgramAddressSync needs 2 arguments
  // 1. seeds = [Buffer.from("enroll")]
  // 2. Program Id

  // const [enrollment] = anchor.web3.PublicKey.findProgramAddressSync();

  // const tx = await EnrollProgram.methods
  // initialize instruction needs 2 arugments
  // 1. Discord handle
  // 2. Github handle
  // .initialize("renzothenoob", "renzothenoob")

  // accounts needs 1 argument in a json format
  // {
  //   payer,
  //   enrollment,
  //   systemProgram
  // }

  // payer refers to the Public Key of your wallet
  // enrollment refers to the Public Key of the PDA
  // systemProgram...... HMMMM. just use this `anchor.web3.SystemProgram.programId,`

  // .accounts({
  //   payer: MY_KEYPAIR.publicKey,
  //   enrollment: enrollment,
  //   systemProgram: anchor.web3.SystemProgram.programId,
  // })

  // signers needs 1 argument
  // an array of Keypair
  // The keypair refers to the keypair that signs the transaction
  // .signers([MY_KEYPAIR])

  // rpc() is used to send the transaction to the Devnet chain
  // .rpc();

  // Print the tx
  // console.log("Your transaction signature", tx);
};

main();
