use anchor_lang::prelude::*;

declare_id!("8FHkEpj5xyYjqVvBMphtHjchY9AzC5CJBJ2pFtscZ4sS");

#[program]
pub mod pathological {
    use super::*;

    pub fn initialize(ctx: Context<InitializeBumps, Initialize>) -> Result<()> {
        msg!(
            "{}, {}, {}",
            ctx.bumps
                .a_supercalifragilisticexpialidociously_long_account_name,
            ctx.bumps
                .a_supercalifragilisticexpialidociously_long_account_name_2,
            ctx.bumps
                .a_supercalifragilisticexpialidociously_long_account_name_3,
        );
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        seeds = [&[69u8]],
        bump,
    )]
    pub a_supercalifragilisticexpialidociously_long_account_name: SystemAccount<'info>,

    #[account(
        seeds = [&[1u8]],
        bump,
    )]
    pub a_supercalifragilisticexpialidociously_long_account_name_2: SystemAccount<'info>,

    #[account(
        seeds = [&[2u8]],
        bump,
    )]
    pub a_supercalifragilisticexpialidociously_long_account_name_3: SystemAccount<'info>,
}
