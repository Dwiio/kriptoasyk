import {utf8Bytes,bytesToHex,hexToBytes} from "../shared/byte-utils.js";

export function generateLfsr(seed,length){
  const clean=String(seed).trim();
  if(!/^[01]{4}$/.test(clean)) throw new Error("Seed LFSR harus tepat 4 bit, contoh 1111.");
  if(clean==="0000") throw new Error("Seed 0000 tidak boleh digunakan karena akan menghasilkan aliran 0 terus-menerus.");
  const total=Math.max(1,Number(length));
  let state=clean;const bits=[],rows=[];
  for(let i=0;i<total;i++){
    const b1=Number(state[0]),b4=Number(state[3]),output=b4,feedback=b1^b4,next=`${feedback}${state.slice(0,3)}`;
    bits.push(String(output));
    if(i<64) rows.push({no:i+1,state,output,feedback,next,formula:`${b1} ⊕ ${b4} = ${feedback}`});
    state=next;
  }
  return {seed:clean,keystream:bits.join(""),rows,period:15};
}
function bytesToBits(bytes){return [...bytes].map(byte=>byte.toString(2).padStart(8,"0")).join("")}
function bitsToBytes(bits){const out=new Uint8Array(Math.ceil(bits.length/8));for(let i=0;i<bits.length;i+=8)out[i/8]=parseInt(bits.slice(i,i+8).padEnd(8,"0"),2);return out}
function xorBits(a,b){return [...a].map((bit,i)=>String(Number(bit)^Number(b[i]))).join("")}
function bytesToText(bytes){return new TextDecoder().decode(bytes)}

function cryptBytes(bytes,seed,mode){
  const inputBits=bytesToBits(bytes),generated=generateLfsr(seed,inputBits.length),outputBits=xorBits(inputBits,generated.keystream),outputBytes=bitsToBytes(outputBits);
  const steps=[`Mode ${mode}: ${bytes.length} byte = ${inputBits.length} bit.`,`Seed = ${generated.seed}; fungsi umpan balik: b₄ = b₁ ⊕ b₄.`,`Keystream: ${generated.keystream.slice(0,32)}${generated.keystream.length>32?"…":""}`,"Operasi bit: C = P ⊕ K. Karena XOR bersifat simetris, dekripsi juga memakai C ⊕ K."];
  generated.rows.slice(0,24).forEach(row=>steps.push(`Step ${row.no}: [${row.state}] → output ${row.output} | feedback ${row.formula} → [${row.next}]`));
  if(generated.rows.length>24)steps.push(`… ${generated.rows.length-24} langkah LFSR berikutnya diringkas.`);
  for(let i=0;i<Math.min(bytes.length,12);i++){const p=inputBits.slice(i*8,i*8+8),k=generated.keystream.slice(i*8,i*8+8),c=outputBits.slice(i*8,i*8+8);steps.push(`Byte ${i}: ${p} ⊕ ${k} = ${c}`)}
  if(bytes.length>12)steps.push(`… ${bytes.length-12} byte berikutnya diproses dengan keystream yang sama.`);
  steps.push(`Hasil byte: ${bytesToHex(outputBytes)}`);
  return {bytes:outputBytes,result:mode==="enkripsi"?bytesToHex(outputBytes):bytesToText(outputBytes),resultHex:bytesToHex(outputBytes),keystream:generated.keystream,rows:generated.rows,steps,summary:{seed:generated.seed,formula:"b₄ = b₁ ⊕ b₄",length:inputBits.length,period:generated.period,inputBytes:bytes.length}};
}
export function lfsrProcess(input,seed,mode="encrypt"){return mode==="encrypt"?cryptBytes(utf8Bytes(input),seed,"enkripsi"):cryptBytes(hexToBytes(input),seed,"dekripsi")}
export function lfsrHexEncrypt(hex,seed){return cryptBytes(hexToBytes(hex),seed,"enkripsi")}
export function lfsrHexDecrypt(hex,seed){return cryptBytes(hexToBytes(hex),seed,"dekripsi")}
