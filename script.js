// ===== Edit your projects here =====
// image: path to a screenshot (e.g. "images/project1.png"), or "" for none
const projects = [
  {
    title: "Real-Time Multiplayer Trading Game",
    description:
      "A multiplayer stock-trading game built on a from-scratch order book matching engine. " +
      "Heap-based price-time priority matching, pre-trade risk checks, and live updates over WebSockets.",
    tech: ["Python", "FastAPI", "WebSockets", "JavaScript"],
    image: "",
    demo: "",
    code: "https://github.com/quannguyen0527/trading-game",
  },
];

// ===== Render projects =====
const grid = document.getElementById("project-grid");
grid.innerHTML = projects
  .map(
    (p) => `
    <article class="card">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />` : ""}
      <div class="card-body">
        <h4>${p.title}</h4>
        <p>${p.description}</p>
        <ul class="tags">${p.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
        <div class="card-links">
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo →</a>` : ""}
          ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">Code →</a>` : ""}
        </div>
      </div>
    </article>`
  )
  .join("");

// ===== Dark mode toggle (remembers choice) =====
const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();
