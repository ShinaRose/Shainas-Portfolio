export function scrollToSection(e, href) {
  if (!href.startsWith("#")) return;

  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id) || document.querySelector(`[id="${id}"]`);

  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
