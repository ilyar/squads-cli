import {
    createUpdateMetadataAccountInstruction,
    UpdateMetadataAccountInstructionArgs,
    PROGRAM_ID,

    SetAndVerifyCollectionInstructionAccounts, SetAndVerifyCollectionStruct, setAndVerifyCollectionInstructionDiscriminator,
    createSetAndVerifyCollectionInstruction
} from '@metaplex-foundation/mpl-token-metadata';
import {PublicKey} from "@solana/web3.js";

export const updateMetadataAuthorityIx = (newAuthority: PublicKey, currentAuthority: PublicKey, metadataAccount: PublicKey) => {
    const accounts = {
        metadata: metadataAccount,
        updateAuthority: currentAuthority,
    };
    const instructionArgs: UpdateMetadataAccountInstructionArgs = {
        updateMetadataAccountArgs: {
            data: null,
            primarySaleHappened: null,
            updateAuthority: newAuthority,
        },
    };
    return createUpdateMetadataAccountInstruction(accounts, instructionArgs, PROGRAM_ID);
};

// export const setAndVerifyCollectionIx = (collection: PublicKey, authority: PublicKey, metadataAccount: PublicKey) => {
//     const accounts: SetAndVerifyCollectionInstructionAccounts = {
//         metadata,
//         collectionAuthority,
//         payer,
//         updateAuthority,
//         collectionMint,
//         collection,
//         collectionMasterEditionAccount
//     };
//     return createSetAndVerifyCollectionInstruction(accounts, PROGRAM_ID);

export {PROGRAM_ID as METAPLEX_PROGRAM_ID};