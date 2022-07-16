import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { Simple } from "../target/types/simple";

describe("simple", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Simple as Program<Simple>;

  it("Is initialized!", async () => {
    const [a] = await PublicKey.findProgramAddress(
      [Buffer.from([69])],
      program.programId
    );
    const tx = await program.methods
      .initialize()
      .accounts({ a })
      .rpc({ skipPreflight: true });
    console.log("Your transaction signature", tx);
  });
});
