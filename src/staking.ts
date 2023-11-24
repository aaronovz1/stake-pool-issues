import { StakeAccount } from "@solana/spl-stake-pool";
import type { Connection, PublicKey } from "@solana/web3.js";
import { StakeProgram } from "@solana/web3.js";

export interface StakeAccountMeta {
  address: PublicKey;
  lamports: number;
  stakeAccount: StakeAccount;
  avg24hSOLRewards: number;
}

export async function findStakeAccountMetas(
  connection: Connection,
  walletAddress: PublicKey,
  solPrice: number
): Promise<StakeAccountMeta[]> {
  const newStakeAccountMetas: StakeAccountMeta[] = [];

  const parsedStakeAccountsWithdrawalAuthority =
    await connection.getParsedProgramAccounts(StakeProgram.programId, {
      filters: [
        {
          memcmp: {
            offset: 44,
            bytes: walletAddress.toBase58(),
          },
        },
      ],
    });

  return newStakeAccountMetas;
}
