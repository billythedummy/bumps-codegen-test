import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { Pathological } from "../target/types/pathological";

describe("pathological", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Pathological as Program<Pathological>;

  it("Is initialized!", async () => {
    const [aSupercalifragilisticexpialidociouslyLongAccountName] =
      await PublicKey.findProgramAddress(
        [Buffer.from([69])],
        program.programId
      );
    const [aSupercalifragilisticexpialidociouslyLongAccountName2] =
      await PublicKey.findProgramAddress([Buffer.from([1])], program.programId);
    const [aSupercalifragilisticexpialidociouslyLongAccountName3] =
      await PublicKey.findProgramAddress([Buffer.from([2])], program.programId);
    const tx = await program.methods
      .initialize()
      .accounts({
        aSupercalifragilisticexpialidociouslyLongAccountName,
        aSupercalifragilisticexpialidociouslyLongAccountName2,
        aSupercalifragilisticexpialidociouslyLongAccountName3,
      })
      .rpc({ skipPreflight: true });
    console.log("Your transaction signature", tx);
  });
});
