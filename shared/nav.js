(() => {
  const pages = [
    ["/", "Caesar"],
    ["/vigenere.html", "Vigenère"],
    ["/xor.html", "XOR"],
    ["/lfsr.html", "LFSR"],
    ["/super.html", "Super"]
  ];
  const path = location.pathname.replace(/\/$/, "") || "/";
  const nav = document.querySelector("#nav-slot");
  if (!nav) return;
  nav.className = "main-nav";
  nav.innerHTML = pages.map(([href,label]) => {
    const active = (href === "/" ? path === "" || path === "/" || path.endsWith("/index.html") : path.endsWith(href));
    return `<a href="${href}" class="${active ? "active" : ""}">${label}</a>`;
  }).join("");
})();
