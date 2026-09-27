export function clearLog(el, empty="Jalankan proses untuk melihat langkah perhitungan.") {
  el.innerHTML = `<div class="empty">${empty}</div>`;
}
export async function playLog(el, lines, speed=45) {
  el.innerHTML = "";
  for (let i=0;i<lines.length;i++) {
    const row=document.createElement("div");
    row.className="process-line";
    row.innerHTML=`<span class="num">${String(i+1).padStart(2,"0")}</span>${escapeHtml(lines[i])}`;
    el.appendChild(row);
    el.scrollTop=el.scrollHeight;
    await new Promise(r=>setTimeout(r,speed));
  }
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
