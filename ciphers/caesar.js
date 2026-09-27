export function caesarProcess(text, shift, mode="encrypt"){
  const s=(mode==="decrypt" ? -1 : 1) * Number(shift);
  const steps=[]; let index=0;
  const result=[...text].map(ch=>{
    if(!/[A-Za-z]/.test(ch)) return ch;
    const base=ch===ch.toUpperCase()?65:97, from=ch.charCodeAt(0)-base;
    const to=((from+s)%26+26)%26, out=String.fromCharCode(base+to);
    steps.push(`${ch} → ${out}  |  (${from} ${s>=0?"+":"−"} ${Math.abs(s)}) mod 26 = ${to}`);
    index++; return out;
  }).join("");
  return {result,steps};
}
