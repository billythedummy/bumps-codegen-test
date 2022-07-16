use anchor_lang::prelude::*;

declare_id!("GiEMRgrcn24y66jkQymDENgLybnNTdKwh8WXsdH8H4aV");

#[program]
pub mod simple {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("{}", ctx.bumps.get("a").unwrap());
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        seeds = [&[69u8]],
        bump,
    )]
    pub a: SystemAccount<'info>,
}
