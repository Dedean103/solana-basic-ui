import { connection, payer, LoadPublicKey, Log } from "../libs/helpers";
import { Ata } from "../3.WrapSOL/ATA";
import { MintTo } from "./MintTo";
// 演示如何在现有 SPL 代币铸币厂中创建新的 SPL 代币（又名'铸造代币'）
(async () => {
  Log("Payer address", payer.publicKey.toBase58());
  // 读取保存的Token地址
  let tokenMint = LoadPublicKey("Token");
  // Ata地址
  const associatedTokenAccount = await Ata(
    connection,
    payer,
    tokenMint,
    payer.publicKey
  );
  // 2位精度，10000.00个
  const amountOfTokensToMint = 1_000_000_000_000_000;
  // 铸造方法
  await MintTo(
    connection,
    payer,
    tokenMint,
    associatedTokenAccount,
    payer,
    amountOfTokensToMint
  );
})();
