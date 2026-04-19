const web3 = require("@solana/web3.js");
const { Metaplex } = require("@metaplex-foundation/js");

(async () => {
  const connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );

  const payer = web3.Keypair.generate(); 
  // ⚠️ IMPORTANT: on va remplacer après par ton vrai wallet

  const metaplex = Metaplex.make(connection);

  const mintAddress = new web3.PublicKey("8DUKP5E8URABuoE6cY3ERsjVwEFJ61gzHVtQbgdmifKk");

  const { nft } = await metaplex.nfts().create({
    uri: "https://example.com/metadata.json",
    name: "SoliCoin",
    symbol: "SOLI",
    sellerFeeBasisPoints: 0,
    mint: mintAddress,
    updateAuthority: payer,
  });

  console.log("Metadata ajoutée !");
  console.log(nft);
})();
