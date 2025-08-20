import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

async function main() {
  const connection = new Connection(clusterApiUrl("devnet"));
  const pubkey = new PublicKey("7FwDktKTLJvHi32eJSHFAgwJnNe6zyrvwVYqPpQnzzXB");
  const balance = await connection.getBalance(pubkey);
  console.log("Balance:", balance / 1e9, "SOL");
}

main();
