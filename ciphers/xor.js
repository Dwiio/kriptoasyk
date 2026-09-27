import {utf8Bytes,hexToBytes,bytesToHex,byteBits,bytesToText} from "../shared/byte-utils.js";
export function xorEncrypt(text,key){
  const data=utf8Bytes(text), k=utf8Bytes(key);
  if(!k.length) throw new Error("Masukkan kunci.");
  const out=new Uint8Array(data.length),steps=[];
  data.forEach((b,i)=>{
    const kb=k[i%k.length], r=b^kb; out[i]=r;
    if(i<40) steps.push(`byte ${i}: ${byteBits(b)} XOR ${byteBits(kb)} = ${byteBits(r)}  (${b} ⊕ ${kb} = ${r})`);
  });
  if(data.length>40) steps.push(`… ${data.length-40} byte berikutnya diproses dengan pola kunci yang sama.`);
  return {result:bytesToHex(out),steps};
}
export function xorDecrypt(hex,key){
  const data=hexToBytes(hex),k=utf8Bytes(key);
  if(!k.length) throw new Error("Masukkan kunci.");
  const out=new Uint8Array(data.length),steps=[];
  data.forEach((b,i)=>{
    const kb=k[i%k.length],r=b^kb;out[i]=r;
    if(i<40) steps.push(`byte ${i}: ${byteBits(b)} XOR ${byteBits(kb)} = ${byteBits(r)} → "${String.fromCharCode(r)||"?"}"`);
  });
  return {result:bytesToText(out),steps};
}
