import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

async function main() {
  const url = clusterApiUrl("devnet");
  const connection = new Connection(url, "confirmed");
  console.log("RPC:", url);

  // Your devnet public key:
  const key = new PublicKey("7FwDktKTLJvHi32eJSHFAgwJnNe6zyrvwVYqPpQnzzXB");
  const lamports = await connection.getBalance(key);
  console.log("Balance:", lamports / 1e9, "SOL");
}

main().catch(console.error);

