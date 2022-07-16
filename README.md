# bumps-codegen-test

Tyre kick comparison of anchor 0.25 to `bumps-codegen` branch.

All programs are the exact same apart from the fact that `Context` in `bumps-codegen/` uses a generated Bumps struct to cache PDA bump seeds while `Context` in `v25/` uses the original `BTreeMap` as in anchor 0.25.0.

## Run

To run `anchor test` for the programs in `bumps-codegen/`, you need to use the anchor cli built from the `bumps-codegen` branch, otherwise the lack of [this change](https://github.com/billythedummy/anchor/commit/a9099857b9b93066d6a439db3ecfd74638059bdf#diff-1f5fa5cf2560f226768c0ee8b37b6afaaedae96054e00211d696636e30e40d1f) will crash the cli when generating the IDL.

## Results

### simple

Simple accounts struct with just 1 PDA.

| version | .so binary size (bytes) | compute units used |
| -- | -- | -- |
| bumps-codegen | 183328 | 6394 |
| 0.25.0 | 193512 | 6664 |

### pathological

Accounts struct has multiple PDAs, requiring multiple BTree lookups. Since keys are lexicographically sorted, choose extremely long and similar account names to make the BTree lookup as expensive as possible.

| version | .so binary size (bytes) | compute units used |
| -- | -- | -- |
| bumps-codegen | 186608 | 17510 |
| 0.25.0 | 198472 | 19209 |