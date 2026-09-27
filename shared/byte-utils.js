export function utf8Bytes(text){ return new TextEncoder().encode(text); }
export function bytesToHex(bytes){ return [...bytes].map(b=>b.toString(16).padStart(2,"0")).join(" "); }
export function hexToBytes(hex){
  const clean=hex.replace(/[^0-9a-f]/gi,"");
  if(clean.length%2) throw new Error("Hex harus berjumlah genap.");
  return new Uint8Array(clean.match(/.{2}/g)?.map(x=>parseInt(x,16)) || []);
}
export function bytesToText(bytes){ return new TextDecoder().decode(bytes); }
export function byteBits(b){ return b.toString(2).padStart(8,"0"); }
