import {caesarProcess} from "./caesar.js";
import {vigenereProcess} from "./vigenere.js";
import {xorEncrypt,xorDecrypt} from "./xor.js";
import {lfsrHexEncrypt,lfsrHexDecrypt} from "./lfsr.js";

export function superEncrypt(text,caesarShift,vigenereKey,xorKey,lfsrSeed){
  const stage1=caesarProcess(text,caesarShift,"encrypt").result;
  const stage2=vigenereProcess(stage1,vigenereKey,"encrypt").result;
  const stage3=xorEncrypt(stage2,xorKey);
  const stage4=lfsrHexEncrypt(stage3.result,lfsrSeed);

  return {
    result:stage4.resultHex,
    stages:[
      ["Teks asli",text],
      ["1 · Caesar",stage1],
      ["2 · Vigenère",stage2],
      ["3 · XOR (hex)",stage3.result],
      ["4 · LFSR (hex)",stage4.resultHex]
    ],
    steps:[
      `Input: ${text}`,
      `Lapisan 1 — Caesar: shift ${caesarShift} → ${stage1}`,
      `Lapisan 2 — Vigenère: key "${vigenereKey}" → ${stage2}`,
      `Lapisan 3 — XOR: key "${xorKey}" → ${stage3.result}`,
      `Lapisan 4 — LFSR: seed ${lfsrSeed}, feedback b₄ = b₁ ⊕ b₄ → ${stage4.keystream.slice(0,40)}${stage4.keystream.length>40?"…":""}`,
      `Hasil akhir: ${stage4.resultHex}`,
      "Dekripsi membalik urutan: LFSR → XOR → Vigenère → Caesar."
    ],
    summary:{order:"Caesar → Vigenère → XOR → LFSR",reverse:"LFSR → XOR → Vigenère → Caesar"}
  };
}

export function superDecrypt(hex,caesarShift,vigenereKey,xorKey,lfsrSeed){
  const stage4=lfsrHexDecrypt(hex,lfsrSeed);
  const stage3=xorDecrypt(stage4.resultHex,xorKey);
  const stage2=vigenereProcess(stage3.result,vigenereKey,"decrypt").result;
  const stage1=caesarProcess(stage2,caesarShift,"decrypt").result;

  return {
    result:stage1,
    stages:[
      ["Cipher LFSR (hex)",hex],
      ["4 → 3 · LFSR balik",stage4.resultHex],
      ["3 → 2 · XOR balik",stage3.result],
      ["2 → 1 · Vigenère balik",stage2],
      ["Teks akhir · Caesar balik",stage1]
    ],
    steps:[
      `Ciphertext: ${hex}`,
      `Lapisan 4 dibalik — LFSR seed ${lfsrSeed} → ${stage4.resultHex}`,
      `Lapisan 3 dibalik — XOR key "${xorKey}" → ${stage3.result}`,
      `Lapisan 2 dibalik — Vigenère key "${vigenereKey}" → ${stage2}`,
      `Lapisan 1 dibalik — Caesar shift ${caesarShift} → ${stage1}`,
      "Dekripsi selesai: teks kembali ke bentuk awal."
    ],
    summary:{order:"LFSR → XOR → Vigenère → Caesar",reverse:"Caesar → Vigenère → XOR → LFSR"}
  };
}
