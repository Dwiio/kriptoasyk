export function vigenereProcess(text,key,mode="encrypt"){
  const clean=String(key).toUpperCase().replace(/[^A-Z]/g,"");
  if(!clean) throw new Error("Masukkan kunci huruf A–Z.");
  let ki=0,result="",steps=[];
  for(const ch of text){
    if(!/[A-Za-z]/.test(ch)){result+=ch;continue;}
    const p=ch.toUpperCase().charCodeAt(0)-65,k=clean[ki%clean.length].charCodeAt(0)-65;
    const value=((p+(mode==="decrypt"?-k:k))%26+26)%26;
    const out=String.fromCharCode((ch===ch.toUpperCase()?65:97)+value);
    result+=out;
    steps.push(`${ch} + ${clean[ki%clean.length]} → (${p} ${mode==="decrypt"?"−":"+"} ${k}) mod 26 = ${value} → ${out}`);
    ki++;
  }
  return {result,steps};
}
