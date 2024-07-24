# Solana CLI 参考和用法

[solana-cli crate](https://crates.io/crates/solana-cli)为Solana提供了一个命令行界面工具

## 例子

### 获取公钥（Get Pubkey）

```bash
// Command
$ solana-keygen pubkey

// Return
<PUBKEY>
```

### 空投SOL/Lamports

```bash
// Command
$ solana airdrop 1

// Return
"1 SOL"
```

### 获取余额（Get Balance）

```bash
// Command
$ solana balance

// Return
"3.00050001 SOL"
```

### 确认交易（Confirm Transaction）

```bash
// Command
$ solana confirm <TX_SIGNATURE>

// Return
"Confirmed" / "Not found" / "Transaction failed with error <ERR>"
```

### 部署程序（Deploy program）

```bash
// Command
$ solana program deploy <PATH>

// Return
<PROGRAM_ID>
```

## 用法

### solana-cli

```bash
solana-cli 1.18.16 (src:bfacaf61; feat:4215500110, client:SolanaLabs)
Blockchain, Rebuilt for Scale

USAGE:
    solana [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    account                              Show the contents of an account
    address                              Get your public key
    address-lookup-table                 Address lookup table management
    airdrop                              Request SOL from a faucet
    authorize-nonce-account              Assign account authority to a new entity
    balance                              Get your balance
    block                                Get a confirmed block
    block-height                         Get current block height
    block-production                     Show information about block production
    block-time                           Get estimated production time of a block
    catchup                              Wait for a validator to catch up to the cluster
    close-vote-account                   Close a vote account and withdraw all funds remaining
    cluster-date                         Get current cluster date, computed from genesis creation time and network
                                         time
    cluster-version                      Get the version of the cluster entrypoint
    completion                           Generate completion scripts for various shells
    config                               Solana command-line tool configuration settings
    confirm                              Confirm transaction by signature
    create-address-with-seed             Generate a derived account address with a seed. For program derived
                                         addresses (PDAs), use the find-program-derived-address command instead
    create-nonce-account                 Create a nonce account
    create-stake-account                 Create a stake account
    create-stake-account-checked         Create a stake account, checking the withdraw authority as a signer
    create-vote-account                  Create a vote account
    deactivate-stake                     Deactivate the delegated stake from the stake account
    decode-transaction                   Decode a serialized transaction
    delegate-stake                       Delegate stake to a vote account
    epoch                                Get current epoch
    epoch-info                           Get information about the current epoch
    feature                              Runtime feature management
    fees                                 Display current cluster fees (Deprecated in v1.8.0)
    find-program-derived-address         Generate a program derived account address with a seed
    first-available-block                Get the first available block in the storage
    genesis-hash                         Get the genesis hash
    gossip                               Show the current gossip network nodes
    help                                 Prints this message or the help of the given subcommand(s)
    inflation                            Show inflation information
    largest-accounts                     Get addresses of largest cluster accounts
    leader-schedule                      Display leader schedule
    live-slots                           Show information about the current slot progression
    logs                                 Stream transaction logs
    merge-stake                          Merges one stake account into another
    new-nonce                            Generate a new nonce, rendering the existing nonce useless
    nonce                                Get the current nonce value
    nonce-account                        Show the contents of a nonce account
    ping                                 Submit transactions sequentially
    program                              Program management
    program-v4                           Program V4 management
    redelegate-stake                     Redelegate active stake to another vote account
    rent                                 Calculate rent-exempt-minimum value for a given account data field length.
    resolve-signer                       Checks that a signer is valid, and returns its specific path; useful for
                                         signers that may be specified generally, eg. usb:~~ledger
    sign-offchain-message                Sign off-chain message
    slot                                 Get current slot
    split-stake                          Duplicate a stake account, splitting the tokens between the two
    stake-account                        Show the contents of a stake account
    stake-authorize                      Authorize a new signing keypair for the given stake account
    stake-authorize-checked              Authorize a new signing keypair for the given stake account, checking the
                                         authority as a signer
    stake-history                        Show the stake history
    stake-minimum-delegation             Get the stake minimum delegation amount
    stake-set-lockup                     Set Lockup for the stake account
    stake-set-lockup-checked             Set Lockup for the stake account, checking the new authority as a signer
    stakes                               Show stake account information
    supply                               Get information about the cluster supply of SOL
    transaction-count                    Get current transaction count
    transaction-history                  Show historical transactions affecting the given address from newest to
                                         oldest
    transfer                             Transfer funds between system accounts
    upgrade-nonce-account                One-time idempotent upgrade of legacy nonce versions in order to bump them
                                         out of chain blockhash domain.
    validator-info                       Publish~get Validator info on Solana
    validators                           Show summary information about the current validators
    verify-offchain-signature            Verify off-chain message signature
    vote-account                         Show the contents of a vote account
    vote-authorize-voter                 Authorize a new vote signing keypair for the given vote account
    vote-authorize-voter-checked         Authorize a new vote signing keypair for the given vote account, checking
                                         the new authority as a signer
    vote-authorize-withdrawer            Authorize a new withdraw signing keypair for the given vote account
    vote-authorize-withdrawer-checked    Authorize a new withdraw signing keypair for the given vote account,
                                         checking the new authority as a signer
    vote-update-commission               Update the vote account's commission
    vote-update-validator                Update the vote account's validator identity
    wait-for-max-stake                   Wait for the max stake of any one node to drop below a percentage of total.
    withdraw-from-nonce-account          Withdraw SOL from the nonce account
    withdraw-from-vote-account           Withdraw lamports from a vote account into a specified account
    withdraw-stake                       Withdraw the unstaked SOL from the stake account
```

### solana-account

```bash
solana-account
Show the contents of an account

USAGE:
    solana account [FLAGS] [OPTIONS] <ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
    -o, --output-file <FILEPATH>           Write the account data to this file
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <ACCOUNT_ADDRESS>    Account contents to show. Address is one of:
                           * a base58-encoded public key
                           * a path to a keypair file
                           * a hyphen; signals a JSON-encoded keypair on stdin
                           * the 'ASK' keyword; to recover a keypair via its seed phrase
                           * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-address

```bash
solana-address
Get your public key

USAGE:
    solana address [FLAGS] [OPTIONS]

FLAGS:
        --confirm-key                    Confirm key on device; only relevant if using remote wallet
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-address-lookup-table

```bash
solana-address-lookup-table
Address lookup table management

USAGE:
    solana address-lookup-table [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    close         Permanently closes a lookup table
    create        Create a lookup table
    deactivate    Permanently deactivates a lookup table
    extend        Append more addresses to a lookup table
    freeze        Permanently freezes a lookup table
    get           Display information about a lookup table
    help          Prints this message or the help of the given subcommand(s)
```

### Solana-airdrop

```bash
solana-airdrop
Request SOL from a faucet

USAGE:
    solana airdrop [FLAGS] [OPTIONS] <AMOUNT> [RECIPIENT_ADDRESS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <AMOUNT>               The airdrop amount to request, in SOL
    <RECIPIENT_ADDRESS>    Account of airdrop recipient. Address is one of:
                             * a base58-encoded public key
                             * a path to a keypair file
                             * a hyphen; signals a JSON-encoded keypair on stdin
                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                             * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-authorize-nonce-account

```bash
solana-authorize-nonce-account
Assign account authority to a new entity

USAGE:
    solana authorize-nonce-account [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS> <AUTHORITY_PUBKEY>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AUTHORITY_PUBKEY>         Account to be granted authority of the nonce account. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-balance

```bash
solana-balance
Get your balance

USAGE:
    solana balance [FLAGS] [OPTIONS] [ACCOUNT_ADDRESS]

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <ACCOUNT_ADDRESS>    Account balance to check. Address is one of:
                           * a base58-encoded public key
                           * a path to a keypair file
                           * a hyphen; signals a JSON-encoded keypair on stdin
                           * the 'ASK' keyword; to recover a keypair via its seed phrase
                           * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-block

```bash
solana-block
Get a confirmed block

USAGE:
    solana block [FLAGS] [OPTIONS] [SLOT]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <SLOT>
```

### solana-block-height

```bash
solana-block-height
Get current block height

USAGE:
    solana block-height [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-block-production

```bash
solana-block-production
Show information about block production

USAGE:
    solana block-production [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
        --epoch <epoch>                    Epoch to show block production for [default: current epoch]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --slot-limit <slot_limit>          Limit results to this many slots from the end of the epoch [default: full
                                           epoch]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-block-time

```bash
solana-block-time
Get estimated production time of a block

USAGE:
    solana block-time [FLAGS] [OPTIONS] [SLOT]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <SLOT>    Slot number of the block to query
```

### solana-catchup

```bash
solana-catchup
Wait for a validator to catch up to the cluster

USAGE:
    solana catchup [FLAGS] [OPTIONS] [ARGS]

FLAGS:
        --follow                         Continue reporting progress even after the validator has caught up
    -h, --help                           Prints help information
        --log                            Don't update the progress inplace; instead show updates with its own new lines
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --our-localhost <PORT>             Guess Identity pubkey and validator rpc node assuming local (possibly
                                           private) validator [default: 8899]
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <OUR_VALIDATOR_PUBKEY>    Identity of the validator. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <OUR_URL>                 JSON RPC URL for validator, which is useful for validators with a private RPC service
```

### solana-close-vote-account

```bash
solana-close-vote-account
Close a vote account and withdraw all funds remaining

USAGE:
    solana close-vote-account [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <RECIPIENT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --authorized-withdrawer <AUTHORIZED_KEYPAIR>      Authorized withdrawer [default: cli config keypair]
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account to be closed. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <RECIPIENT_ADDRESS>       The recipient of all withdrawn SOL. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-cluster-date

```bash
solana-cluster-date
Get current cluster date, computed from genesis creation time and network time

USAGE:
    solana cluster-date [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-cluster-version

```bash
solana-cluster-version
Get the version of the cluster entrypoint

USAGE:
    solana cluster-version [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-completion

```bash
solana-completion
Generate completion scripts for various shells

USAGE:
    solana completion [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
    -s, --shell <shell>                     [default: bash]  [possible values: bash, fish, zsh, powershell, elvish]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-config

```bash
solana-config
Solana command-line tool configuration settings

USAGE:
    solana config [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    export-address-labels    Export the current address labels
    get                      Get current config settings
    help                     Prints this message or the help of the given subcommand(s)
    import-address-labels    Import a list of address labels
    set                      Set a config setting
```

### solana-confirm

```bash
solana-confirm
Confirm transaction by signature

USAGE:
    solana confirm [FLAGS] [OPTIONS] <TRANSACTION_SIGNATURE>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <TRANSACTION_SIGNATURE>    The transaction signature to confirm

Note: This will show more detailed information for finalized transactions with verbose mode (-v~--verbose).

Account modes:
  |srwx|
    s: signed
    r: readable (always true)
    w: writable
    x: program account (inner instructions excluded)
```

### solana-create-address-with-seed

```bash
solana-create-address-with-seed
Generate a derived account address with a seed. For program derived addresses (PDAs), use the find-program-derived-
address command instead

USAGE:
    solana create-address-with-seed [FLAGS] [OPTIONS] <SEED_STRING> <PROGRAM_ID>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
        --from <FROM_PUBKEY>               From (base) key, [default: cli config keypair]. Address is one of:
                                             * a base58-encoded public key
                                             * a path to a keypair file
                                             * a hyphen; signals a JSON-encoded keypair on stdin
                                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                                             * a hardware wallet keypair URL (i.e. usb:~~ledger)
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <SEED_STRING>    The seed.  Must not take more than 32 bytes to encode as utf-8
    <PROGRAM_ID>     The program_id that the address will ultimately be used for,
                     or one of NONCE, STAKE, and VOTE keywords
```

### solana-create-nonce-account

```bash
solana-create-nonce-account
Create a nonce account

USAGE:
    solana create-nonce-account [FLAGS] [OPTIONS] <ACCOUNT_KEYPAIR> <AMOUNT>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce-authority <PUBKEY>
            Assign noncing authority to this other entity. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of the
            NONCE_ACCOUNT pubkey
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <ACCOUNT_KEYPAIR>    Keypair of the nonce account to fund
    <AMOUNT>             The amount to load the nonce account with, in SOL; accepts keyword ALL
```

### solana-create-stake-account

```bash
solana-create-stake-account
Create a stake account

USAGE:
    solana create-stake-account [FLAGS] [OPTIONS] <STAKE_ACCOUNT_KEYPAIR> <AMOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <PUBKEY>
            Authority to modify lockups. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
        --from <KEYPAIR>                                  Source account of funds [default: cli config keypair]
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --lockup-date <RFC3339 DATETIME>
            The date and time at which this account will be available for withdrawal

        --lockup-epoch <NUMBER>
            The epoch height at which this account will be available for withdrawal

        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of the
            STAKE_ACCOUNT_KEYPAIR pubkey
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <PUBKEY>                        Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster
        --withdraw-authority <PUBKEY>                     Authorized withdrawer [default: cli config keypair]

ARGS:
    <STAKE_ACCOUNT_KEYPAIR>    Stake account to create (or base of derived address if --seed is used)
    <AMOUNT>                   The amount to send to the stake account, in SOL; accepts keyword ALL
```

### solana-create-stake-account-checked

```bash
solana-create-stake-account-checked
Create a stake account, checking the withdraw authority as a signer

USAGE:
    solana create-stake-account-checked [FLAGS] [OPTIONS] <STAKE_ACCOUNT_KEYPAIR> <AMOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
        --from <KEYPAIR>                                  Source account of funds [default: cli config keypair]
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of the
            STAKE_ACCOUNT_KEYPAIR pubkey
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <PUBKEY>                        Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster
        --withdraw-authority <KEYPAIR>                    Authorized withdrawer [default: cli config keypair]

ARGS:
    <STAKE_ACCOUNT_KEYPAIR>    Stake account to create (or base of derived address if --seed is used)
    <AMOUNT>                   The amount to send to the stake account, in SOL; accepts keyword ALL
```

### solana-create-vote-account

```bash
solana-create-vote-account
Create a vote account

USAGE:
    solana create-vote-account [FLAGS] [OPTIONS] <ACCOUNT_KEYPAIR> <IDENTITY_KEYPAIR> <WITHDRAWER_PUBKEY>

FLAGS:
        --allow-unsafe-authorized-withdrawer    Allow an authorized withdrawer pubkey to be identical to the validator
                                                identity account pubkey or vote account pubkey, which is normally an
                                                unsafe configuration and should be avoided.
        --dump-transaction-message              Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                                  Prints help information
        --no-address-labels                     Do not use address labels in the output
        --sign-only                             Sign the transaction offline
        --skip-seed-phrase-validation           Skip validation of seed phrases. Use this if your phrase does not use
                                                the BIP39 official English word list
        --use-quic                              Use QUIC when sending transactions.
        --use-udp                               Use UDP when sending transactions.
    -V, --version                               Prints version information
    -v, --verbose                               Show additional information

OPTIONS:
        --authorized-voter <VOTER_PUBKEY>
            Authorized voter [default: validator identity pubkey]. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commission <PERCENTAGE>
            The commission taken on reward redemption (0-100) [default: 100]

        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of the VOTE
            ACCOUNT pubkey
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <ACCOUNT_KEYPAIR>      Vote account keypair to create
    <IDENTITY_KEYPAIR>     Keypair of validator that will vote with this account
    <WITHDRAWER_PUBKEY>    Authorized withdrawer. Address is one of:
                             * a base58-encoded public key
                             * a path to a keypair file
                             * a hyphen; signals a JSON-encoded keypair on stdin
                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                             * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-deactivate-stake

```bash
solana-deactivate-stake
Deactivate the delegated stake from the stake account

USAGE:
    solana deactivate-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS>

FLAGS:
        --delinquent                     Deactivate abandoned stake that is currently delegated to a delinquent vote
                                         account
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of
            STAKE_ACCOUNT_ADDRESS
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account to be deactivated (or base of derived address if --seed is used).
                               Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-decode-transaction

```bash
solana-decode-transaction
Decode a serialized transaction

USAGE:
    solana decode-transaction [FLAGS] [OPTIONS] <TRANSACTION> <ENCODING>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <TRANSACTION>    transaction to decode
    <ENCODING>       transaction encoding [default: base58]  [possible values: base58, base64]
```

### solana-delegate-stake

```bash
solana-delegate-stake
Delegate stake to a vote account

USAGE:
    solana delegate-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <VOTE_ACCOUNT_ADDRESS>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account to delegate. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <VOTE_ACCOUNT_ADDRESS>     Vote account to which the stake will be delegated. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-epoch

```bash
solana-epoch
Get current epoch

USAGE:
    solana epoch [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-epoch-info

```bash
solana-epoch-info
Get information about the current epoch

USAGE:
    solana epoch-info [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-feature

```bash
solana-feature
Runtime feature management

USAGE:
    solana feature [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    activate    Activate a runtime feature
    help        Prints this message or the help of the given subcommand(s)
    status      Query runtime feature status
```

### solana-fees

```bash
solana-fees
Display current cluster fees (Deprecated in v1.8.0)

USAGE:
    solana fees [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>            Query fees for BLOCKHASH instead of the the most recent blockhash
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-find-program-derived-address

```bash
solana-find-program-derived-address
Generate a program derived account address with a seed

USAGE:
    solana find-program-derived-address [FLAGS] [OPTIONS] <PROGRAM_ID> [SEED]...

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <PROGRAM_ID>    The program_id that the address will ultimately be used for,
                    or one of NONCE, STAKE, and VOTE keywords
    <SEED>...       The seeds.
                    Each one must match the pattern PREFIX:VALUE.
                    PREFIX can be one of [string, pubkey, hex, u8]
                    or matches the pattern [u,i][16,32,64,128][le,be] (for example u64le) for number values
                    [u,i] - represents whether the number is unsigned or signed,
                    [16,32,64,128] - represents the bit length, and
                    [le,be] - represents the byte order - little endian or big endian
```

### solana-first-available-block

```bash
solana-first-available-block
Get the first available block in the storage

USAGE:
    solana first-available-block [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-genesis-hash

```bash
solana-genesis-hash
Get the genesis hash

USAGE:
    solana genesis-hash [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-gossip

```bash
solana-gossip
Show the current gossip network nodes

USAGE:
    solana gossip [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-help

```bash
solana-help
Prints this message or the help of the given subcommand(s)

USAGE:
    solana help [subcommand]...

ARGS:
    <subcommand>...    The subcommand whose help message to display
```

### solana-inflation

```bash
solana-inflation
Show inflation information

USAGE:
    solana inflation [FLAGS] [OPTIONS] [SUBCOMMAND]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    help       Prints this message or the help of the given subcommand(s)
    rewards    Show inflation rewards for a set of addresses
```

### solana-largest-accounts

```bash
solana-largest-accounts
Get addresses of largest cluster accounts

USAGE:
    solana largest-accounts [FLAGS] [OPTIONS]

FLAGS:
        --circulating                    Filter address list to only circulating accounts
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --non-circulating                Filter address list to only non-circulating accounts
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-leader-schedule

```bash
solana-leader-schedule
Display leader schedule

USAGE:
    solana leader-schedule [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
        --epoch <EPOCH>                    Epoch to show leader schedule for [default: current]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-live-slots

```bash
solana-live-slots
Show information about the current slot progression

USAGE:
    solana live-slots [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-logs

```bash
solana-logs
Stream transaction logs

USAGE:
    solana logs [FLAGS] [OPTIONS] [ADDRESS]

FLAGS:
    -h, --help                           Prints help information
        --include-votes                  Include vote transactions when monitoring all transactions
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <ADDRESS>    Account to monitor [default: monitor all transactions except for votes]. Address is one of:
                   * a base58-encoded public key
                   * a path to a keypair file
                   * a hyphen; signals a JSON-encoded keypair on stdin
                   * the 'ASK' keyword; to recover a keypair via its seed phrase
                   * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-merge-stake

```bash
solana-merge-stake
Merges one stake account into another

USAGE:
    solana merge-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <SOURCE_STAKE_ACCOUNT_ADDRESS>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>           Stake account to merge into. Address is one of:
                                        * a base58-encoded public key
                                        * a path to a keypair file
                                        * a hyphen; signals a JSON-encoded keypair on stdin
                                        * the 'ASK' keyword; to recover a keypair via its seed phrase
                                        * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <SOURCE_STAKE_ACCOUNT_ADDRESS>    Source stake account for the merge. If successful, this stake account will no
                                      longer exist after the merge. Address is one of:
                                        * a base58-encoded public key
                                        * a path to a keypair file
                                        * a hyphen; signals a JSON-encoded keypair on stdin
                                        * the 'ASK' keyword; to recover a keypair via its seed phrase
                                        * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-new-nonce

```bash
solana-new-nonce
Generate a new nonce, rendering the existing nonce useless

USAGE:
    solana new-nonce [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-nonce

```bash
solana-nonce
Get the current nonce value

USAGE:
    solana nonce [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account to display. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-nonce-account

```bash
solana-nonce-account
Show the contents of a nonce account

USAGE:
    solana nonce-account [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account to display. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-ping

```bash
solana-ping
Submit transactions sequentially

USAGE:
    solana ping [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
    -D, --print-timestamp                Print timestamp (unix time + microseconds as in gettimeofday) before each line
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -c, --count <NUMBER>                                  Stop after submitting count transactions
    -i, --interval <SECONDS>
            Wait interval seconds between submitting the next transaction [default: 2]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

    -t, --timeout <SECONDS>
            Wait up to timeout seconds for transaction confirmation [default: 15]

        --ws <URL>                                        WebSocket URL for the solana cluster
```

### solana-program

```bash
solana-program
Program management

USAGE:
    solana program [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    close                    Close a program or buffer account and withdraw all lamports
    deploy                   Deploy an upgradeable program
    dump                     Write the program data to a file
    extend                   Extend the length of an upgradeable program to deploy larger programs
    help                     Prints this message or the help of the given subcommand(s)
    set-buffer-authority     Set a new buffer authority
    set-upgrade-authority    Set a new program authority
    show                     Display information about a buffer or program
    upgrade                  Upgrade an upgradeable program
    write-buffer             Writes a program into a buffer account
```

### solana-program-v4

```bash
solana-program-v4
Program V4 management

USAGE:
    solana program-v4 [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    deploy      Deploy a program
    dump        Write the program data to a file
    finalize    Finalize a program to make it immutable
    help        Prints this message or the help of the given subcommand(s)
    redeploy    Redeploy a previously deployed program
    show        Display information about a buffer or program
    undeploy    Undeploy~close a program
```

### solana-redelegate-stake

```bash
solana-redelegate-stake
Redelegate active stake to another vote account

USAGE:
    solana redelegate-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <REDELEGATED_VOTE_ACCOUNT_ADDRESS> <REDELEGATION_STAKE_ACCOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>            Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
        --fee-payer <KEYPAIR>              Specify the fee-payer account. This may be a keypair file, the ASK keyword
                                           or the pubkey of an offline signer, provided an appropriate --signer argument
                                           is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --with-memo <MEMO>                 Specify a memo string to include in the transaction.
        --nonce <PUBKEY>                   Provide the nonce account to use when creating a nonced
                                           transaction. Nonced transactions are useful when a transaction
                                           requires a lengthy signing process. Learn more about nonced
                                           transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>        Provide the nonce authority keypair to use when signing a nonced transaction
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --signer <PUBKEY=SIGNATURE>...     Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>        Authorized staker [default: cli config keypair]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>               Existing delegated stake account that has been fully activated. On success
                                          this stake account will be scheduled for deactivation and the rent-exempt
                                          balance may be withdrawn once fully deactivated. Address is one of:
                                            * a base58-encoded public key
                                            * a path to a keypair file
                                            * a hyphen; signals a JSON-encoded keypair on stdin
                                            * the 'ASK' keyword; to recover a keypair via its seed phrase
                                            * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <REDELEGATED_VOTE_ACCOUNT_ADDRESS>    Vote account to which the stake will be redelegated. Address is one of:
                                            * a base58-encoded public key
                                            * a path to a keypair file
                                            * a hyphen; signals a JSON-encoded keypair on stdin
                                            * the 'ASK' keyword; to recover a keypair via its seed phrase
                                            * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <REDELEGATION_STAKE_ACCOUNT>          Stake account to create for the redelegation. On success this stake
                                          account will be created and scheduled for activation with all the stake in
                                          the existing stake account, exclusive of the rent-exempt balance retained
                                          in the existing account
```

### solana-rent

```bash
solana-rent
Calculate rent-exempt-minimum value for a given account data field length.

USAGE:
    solana rent [FLAGS] [OPTIONS] <DATA_LENGTH_OR_MONIKER>

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display rent in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <DATA_LENGTH_OR_MONIKER>    Length of data field in the account to calculate rent for, or moniker: [nonce,
                                stake, system, vote]
```

### solana-resolve-signer

```bash
solana-resolve-signer
Checks that a signer is valid, and returns its specific path; useful for signers that may be specified generally, eg.
usb:~~ledger

USAGE:
    solana resolve-signer [FLAGS] [OPTIONS] <SIGNER_KEYPAIR>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <SIGNER_KEYPAIR>    The signer path to resolve
```

### solana-sign-offchain-message

```bash
solana-sign-offchain-message
Sign off-chain message

USAGE:
    solana sign-offchain-message [FLAGS] [OPTIONS] <STRING>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --version <VERSION>                The off-chain message version [default: 0]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <STRING>    The message bash to be signed
```

### solana-slot

```bash
solana-slot
Get current slot

USAGE:
    solana slot [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-split-stake

```bash
solana-split-stake
Duplicate a stake account, splitting the tokens between the two

USAGE:
    solana split-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <SPLIT_STAKE_ACCOUNT> <AMOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --rent-exempt-reserve-sol <AMOUNT>
            Offline signing only: the rent-exempt amount to move into the new stake account, in SOL

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of
            SPLIT_STAKE_ACCOUNT
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account to split (or base of derived address if --seed is used). Address is one
                               of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <SPLIT_STAKE_ACCOUNT>      Keypair of the new stake account
    <AMOUNT>                   The amount to move into the new stake account, in SOL
```

### solana-stake-account

```bash
solana-stake-account
Show the contents of a stake account

USAGE:
    solana stake-account [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS>

FLAGS:
        --csv                            Format stake rewards data in csv
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information
        --with-rewards                   Display inflation rewards

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --num-rewards-epochs <NUM>         Display rewards for NUM recent epochs, max 10 [default: latest epoch only]
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account to display. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-stake-authorize

```bash
solana-stake-authorize
Authorize a new signing keypair for the given stake account

USAGE:
    solana stake-authorize [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> --new-stake-authority <PUBKEY> --new-withdraw-authority <PUBKEY>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --no-wait                        Return signature immediately after submitting the transaction, instead of
                                         waiting for confirmations
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <KEYPAIR>                             Authority to override account lockup
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --new-stake-authority <PUBKEY>
            New authorized staker. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --new-withdraw-authority <PUBKEY>
            New authorized withdrawer. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster
        --withdraw-authority <KEYPAIR>                    Authorized withdrawer [default: cli config keypair]

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account in which to set a new authority. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-stake-authorize-checked

```bash
solana-stake-authorize-checked
Authorize a new signing keypair for the given stake account, checking the authority as a signer

USAGE:
    solana stake-authorize-checked [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> --new-stake-authority <KEYPAIR> --new-withdraw-authority <KEYPAIR>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --no-wait                        Return signature immediately after submitting the transaction, instead of
                                         waiting for confirmations
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <KEYPAIR>                             Authority to override account lockup
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --new-stake-authority <KEYPAIR>                   New authorized staker
        --new-withdraw-authority <KEYPAIR>                New authorized withdrawer
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --stake-authority <KEYPAIR>                       Authorized staker [default: cli config keypair]
        --ws <URL>                                        WebSocket URL for the solana cluster
        --withdraw-authority <KEYPAIR>                    Authorized withdrawer [default: cli config keypair]

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account in which to set a new authority. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-stake-history

```bash
solana-stake-history
Show the stake history

USAGE:
    solana stake-history [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --limit <NUM>                      Display NUM recent epochs worth of stake history in bash mode. 0 for all
                                           [default: 10]
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-stake-minimum-delegation

```bash
solana-stake-minimum-delegation
Get the stake minimum delegation amount

USAGE:
    solana stake-minimum-delegation [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display minimum delegation in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-stake-set-lockup

```bash
solana-stake-set-lockup
Set Lockup for the stake account

USAGE:
    solana stake-set-lockup [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <--lockup-epoch <NUMBER>|--lockup-date <RFC3339 DATETIME>|--new-custodian <PUBKEY>>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <KEYPAIR>                             Keypair of the existing custodian [default: cli config pubkey]
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --lockup-date <RFC3339 DATETIME>
            The date and time at which this account will be available for withdrawal

        --lockup-epoch <NUMBER>
            The epoch height at which this account will be available for withdrawal

        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --new-custodian <PUBKEY>
            New lockup custodian. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account for which to set lockup parameters. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-stake-set-lockup-checked

```bash
solana-stake-set-lockup-checked
Set Lockup for the stake account, checking the new authority as a signer

USAGE:
    solana stake-set-lockup-checked [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <--lockup-epoch <NUMBER>|--lockup-date <RFC3339 DATETIME>|--new-custodian <KEYPAIR>>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <KEYPAIR>                             Keypair of the existing custodian [default: cli config pubkey]
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --lockup-date <RFC3339 DATETIME>
            The date and time at which this account will be available for withdrawal

        --lockup-epoch <NUMBER>
            The epoch height at which this account will be available for withdrawal

        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --new-custodian <KEYPAIR>                         Keypair of a new lockup custodian
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account for which to set lockup parameters. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-stakes

```bash
solana-stakes
Show stake account information

USAGE:
    solana stakes [FLAGS] [OPTIONS] [VOTE_ACCOUNT_PUBKEYS]...

FLAGS:
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
        --withdraw-authority <PUBKEY>      Only show stake accounts with the provided withdraw authority. Address is one
                                           of:
                                             * a base58-encoded public key
                                             * a path to a keypair file
                                             * a hyphen; signals a JSON-encoded keypair on stdin
                                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                                             * a hardware wallet keypair URL (i.e. usb:~~ledger)

ARGS:
    <VOTE_ACCOUNT_PUBKEYS>...    Only show stake accounts delegated to the provided vote account. Address is one of:
                                   * a base58-encoded public key
                                   * a path to a keypair file
                                   * a hyphen; signals a JSON-encoded keypair on stdin
                                   * the 'ASK' keyword; to recover a keypair via its seed phrase
                                   * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-supply

```bash
solana-supply
Get information about the cluster supply of SOL

USAGE:
    solana supply [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --print-accounts                 Print list of non-circualting account addresses
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-transaction-count

```bash
solana-transaction-count
Get current transaction count

USAGE:
    solana transaction-count [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster
```

### solana-transaction-history

```bash
solana-transaction-history
Show historical transactions affecting the given address from newest to oldest

USAGE:
    solana transaction-history [FLAGS] [OPTIONS] <ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --show-transactions              Display the full transactions
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --before <TRANSACTION_SIGNATURE>    Start with the first signature older than this one
        --commitment <COMMITMENT_LEVEL>     Return information at the selected commitment level [possible values:
                                            processed, confirmed, finalized]
    -C, --config <FILEPATH>                 Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>              URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                            testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                 Filepath or URL to a keypair
        --limit <LIMIT>                     Maximum number of transaction signatures to return [default: 1000]
        --output <FORMAT>                   Return information in specified output format [possible values: json, json-
                                            compact]
        --until <TRANSACTION_SIGNATURE>     List until this transaction signature, if found before limit reached
        --ws <URL>                          WebSocket URL for the solana cluster

ARGS:
    <ADDRESS>    Account to query for transactions. Address is one of:
                   * a base58-encoded public key
                   * a path to a keypair file
                   * a hyphen; signals a JSON-encoded keypair on stdin
                   * the 'ASK' keyword; to recover a keypair via its seed phrase
                   * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-transfer

```bash
solana-transfer
Transfer funds between system accounts

USAGE:
    solana transfer [FLAGS] [OPTIONS] <RECIPIENT_ADDRESS> <AMOUNT>

FLAGS:
        --allow-unfunded-recipient       Complete the transfer even if the recipient address is not funded
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --no-wait                        Return signature immediately after submitting the transaction, instead of
                                         waiting for confirmations
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
        --from <FROM_ADDRESS>
            Source account of funds [default: cli config keypair]. Address is one of:
              * a base58-encoded public key
              * a path to a keypair file
              * a hyphen; signals a JSON-encoded keypair on stdin
              * the 'ASK' keyword; to recover a keypair via its seed phrase
              * a hardware wallet keypair URL (i.e. usb:~~ledger)
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <RECIPIENT_ADDRESS>    Account of recipient. Address is one of:
                             * a base58-encoded public key
                             * a path to a keypair file
                             * a hyphen; signals a JSON-encoded keypair on stdin
                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                             * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AMOUNT>               The amount to send, in SOL; accepts keyword ALL
```

### solana-upgrade-nonce-account

```bash
solana-upgrade-nonce-account
One-time idempotent upgrade of legacy nonce versions in order to bump them out of chain blockhash domain.

USAGE:
    solana upgrade-nonce-account [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account to upgrade. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-validator-info

```bash
solana-validator-info
Publish~get Validator info on Solana

USAGE:
    solana validator-info [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

SUBCOMMANDS:
    get        Get and parse Solana Validator info
    help       Prints this message or the help of the given subcommand(s)
    publish    Publish Validator info on Solana
```

### solana-validators

```bash
solana-validators
Show summary information about the current validators

USAGE:
    solana validators [FLAGS] [OPTIONS]

FLAGS:
    -h, --help                           Prints help information
        --keep-unstaked-delinquents      Don't discard unstaked, delinquent validators
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
    -n, --number                         Number the validators
    -r, --reverse                        Reverse order while sorting
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --delinquent-slot-distance <SLOT_DISTANCE>
            Minimum slot distance from the tip to consider a validator delinquent [default: 128]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                           Filepath or URL to a keypair
        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --sort <sort>
            Sort order (does not affect JSON output) [default: stake]  [possible values: delinquent, commission,
            credits, identity, last-vote, root, skip-rate, stake, version, vote-account]
        --ws <URL>                                    WebSocket URL for the solana cluster
```

### solana-verify-offchain-signature

```bash
solana-verify-offchain-signature
Verify off-chain message signature

USAGE:
    solana verify-offchain-signature [FLAGS] [OPTIONS] <STRING> <SIGNATURE>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --signer <PUBKEY>                  Message signer [default: cli config keypair]. Address is one of:
                                             * a base58-encoded public key
                                             * a path to a keypair file
                                             * a hyphen; signals a JSON-encoded keypair on stdin
                                             * the 'ASK' keyword; to recover a keypair via its seed phrase
                                             * a hardware wallet keypair URL (i.e. usb:~~ledger)
        --version <VERSION>                The off-chain message version [default: 0]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <STRING>       The bash of the original message
    <SIGNATURE>    The message signature to verify
```

### solana-vote-account

```bash
solana-vote-account
Show the contents of a vote account

USAGE:
    solana vote-account [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS>

FLAGS:
        --csv                            Format rewards in a CSV table
    -h, --help                           Prints help information
        --lamports                       Display balance in lamports instead of SOL
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information
        --with-rewards                   Display inflation rewards

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --num-rewards-epochs <NUM>         Display rewards for NUM recent epochs, max 10 [default: latest epoch only]
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-vote-authorize-voter

```bash
solana-vote-authorize-voter
Authorize a new vote signing keypair for the given vote account

USAGE:
    solana vote-authorize-voter [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <AUTHORIZED_KEYPAIR> <NEW_AUTHORIZED_PUBKEY>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>     Vote account in which to set the authorized voter. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AUTHORIZED_KEYPAIR>       Current authorized vote signer.
    <NEW_AUTHORIZED_PUBKEY>    New authorized vote signer. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-vote-authorize-voter-checked

```bash
solana-vote-authorize-voter-checked
Authorize a new vote signing keypair for the given vote account, checking the new authority as a signer

USAGE:
    solana vote-authorize-voter-checked [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <AUTHORIZED_KEYPAIR> <NEW_AUTHORIZED_KEYPAIR>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>      Vote account in which to set the authorized voter. Address is one of:
                                  * a base58-encoded public key
                                  * a path to a keypair file
                                  * a hyphen; signals a JSON-encoded keypair on stdin
                                  * the 'ASK' keyword; to recover a keypair via its seed phrase
                                  * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AUTHORIZED_KEYPAIR>        Current authorized vote signer.
    <NEW_AUTHORIZED_KEYPAIR>    New authorized vote signer.
```

### solana-vote-authorize-withdrawer

```bash
solana-vote-authorize-withdrawer
Authorize a new withdraw signing keypair for the given vote account

USAGE:
    solana vote-authorize-withdrawer [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <AUTHORIZED_KEYPAIR> <AUTHORIZED_PUBKEY>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account in which to set the authorized withdrawer. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AUTHORIZED_KEYPAIR>      Current authorized withdrawer.
    <AUTHORIZED_PUBKEY>       New authorized withdrawer. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
```

### solana-vote-authorize-withdrawer-checked

```bash
solana-vote-authorize-withdrawer-checked
Authorize a new withdraw signing keypair for the given vote account, checking the new authority as a signer

USAGE:
    solana vote-authorize-withdrawer-checked [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <AUTHORIZED_KEYPAIR> <NEW_AUTHORIZED_KEYPAIR>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>      Vote account in which to set the authorized withdrawer. Address is one of:
                                  * a base58-encoded public key
                                  * a path to a keypair file
                                  * a hyphen; signals a JSON-encoded keypair on stdin
                                  * the 'ASK' keyword; to recover a keypair via its seed phrase
                                  * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AUTHORIZED_KEYPAIR>        Current authorized withdrawer.
    <NEW_AUTHORIZED_KEYPAIR>    New authorized withdrawer.
```

### solana-vote-update-commission

```bash
solana-vote-update-commission
Update the vote account's commission

USAGE:
    solana vote-update-commission [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <PERCENTAGE> <AUTHORIZED_KEYPAIR>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account to update. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <PERCENTAGE>              The new commission
    <AUTHORIZED_KEYPAIR>      Authorized withdrawer keypair
```

### solana-vote-update-validator

```bash
solana-vote-update-validator
Update the vote account's validator identity

USAGE:
    solana vote-update-validator [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <IDENTITY_KEYPAIR> <AUTHORIZED_KEYPAIR>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account to update. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <IDENTITY_KEYPAIR>        Keypair of new validator that will vote with this account
    <AUTHORIZED_KEYPAIR>      Authorized withdrawer keypair
```

### solana-wait-for-max-stake

```bash
solana-wait-for-max-stake
Wait for the max stake of any one node to drop below a percentage of total.

USAGE:
    solana wait-for-max-stake [FLAGS] [OPTIONS] [PERCENT]

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~.config~solana~cli~config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the solana cluster

ARGS:
    <PERCENT>
```

### solana-withdraw-from-nonce-account

```bash
solana-withdraw-from-nonce-account
Withdraw SOL from the nonce account

USAGE:
    solana withdraw-from-nonce-account [FLAGS] [OPTIONS] <NONCE_ACCOUNT_ADDRESS> <RECIPIENT_ADDRESS> <AMOUNT>

FLAGS:
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <NONCE_ACCOUNT_ADDRESS>    Nonce account to withdraw from. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <RECIPIENT_ADDRESS>        Recipient of withdrawn SOL. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AMOUNT>                   The amount to withdraw from the nonce account, in SOL
```

### solana-withdraw-from-vote-account

```bash
solana-withdraw-from-vote-account
Withdraw lamports from a vote account into a specified account

USAGE:
    solana withdraw-from-vote-account [FLAGS] [OPTIONS] <VOTE_ACCOUNT_ADDRESS> <RECIPIENT_ADDRESS> <AMOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --authorized-withdrawer <AUTHORIZED_KEYPAIR>      Authorized withdrawer [default: cli config keypair]
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster

ARGS:
    <VOTE_ACCOUNT_ADDRESS>    Vote account from which to withdraw. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <RECIPIENT_ADDRESS>       The recipient of withdrawn SOL. Address is one of:
                                * a base58-encoded public key
                                * a path to a keypair file
                                * a hyphen; signals a JSON-encoded keypair on stdin
                                * the 'ASK' keyword; to recover a keypair via its seed phrase
                                * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AMOUNT>                  The amount to withdraw, in SOL; accepts keyword ALL, which for this command means
                              account balance minus rent-exempt minimum
```

### solana-withdraw-stake

```bash
solana-withdraw-stake
Withdraw the unstaked SOL from the stake account

USAGE:
    solana withdraw-stake [FLAGS] [OPTIONS] <STAKE_ACCOUNT_ADDRESS> <RECIPIENT_ADDRESS> <AMOUNT>

FLAGS:
        --dump-transaction-message       Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                           Prints help information
        --no-address-labels              Do not use address labels in the output
        --sign-only                      Sign the transaction offline
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                           Use the supplied blockhash
        --commitment <COMMITMENT_LEVEL>
            Return information at the selected commitment level [possible values: processed, confirmed, finalized]

        --with-compute-unit-price <COMPUTE-UNIT-PRICE>
            Set compute unit price for transaction, in increments of 0.000001 lamports per compute unit.

    -C, --config <FILEPATH>
            Configuration file to use [default: ~.config~solana~cli~config.yml]

        --custodian <KEYPAIR>                             Authority to override account lockup
        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]

    -k, --keypair <KEYPAIR>                               Filepath or URL to a keypair
        --with-memo <MEMO>                                Specify a memo string to include in the transaction.
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https:~~docs.solanalabs.com~cli~examples~durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --seed <STRING>
            Seed for address generation; if specified, the resulting account will be at a derived address of
            STAKE_ACCOUNT_ADDRESS
        --signer <PUBKEY=SIGNATURE>...                    Provide a public-key~signature pair for the transaction
        --ws <URL>                                        WebSocket URL for the solana cluster
        --withdraw-authority <KEYPAIR>                    Authorized withdrawer [default: cli config keypair]

ARGS:
    <STAKE_ACCOUNT_ADDRESS>    Stake account from which to withdraw (or base of derived address if --seed is used).
                               Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <RECIPIENT_ADDRESS>        Recipient of withdrawn stake. Address is one of:
                                 * a base58-encoded public key
                                 * a path to a keypair file
                                 * a hyphen; signals a JSON-encoded keypair on stdin
                                 * the 'ASK' keyword; to recover a keypair via its seed phrase
                                 * a hardware wallet keypair URL (i.e. usb:~~ledger)
    <AMOUNT>                   The amount to withdraw from the stake account, in SOL; accepts keyword ALL
```
