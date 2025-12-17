// js/menu.js
(function () {
  const menuRoot = document.querySelector("#lab-menu");
  if (!menuRoot) return;

  // Яке зараз ЛР? Очікуємо <body data-lab="4">
  const lab = document.body.dataset.lab || "";
  if (!lab) return;

  const menus = {
    "4": [
      { href: "./lab-4.1.html", text: "Тема, мета ЛР №4. Місце розташування сайту, звіту" },
      { href: "./lab-4.2.html", text: "ЗАВДАННЯ №1" },
      { href: "./lab-4.3.html", text: "ЗАВДАННЯ №2" },
      { href: "./lab-4.4.html", text: "ЗАВДАННЯ №3" },
      { href: "./lab-4.5.html", text: "ЗАВДАННЯ №4" },
      { href: "./lab-4.6.html", text: "ЗАВДАННЯ №5" },
      { href: "./lab-4.7.html", text: "ЗАВДАННЯ №6" },
      { href: "./lab-4.8.html", text: "ЗАВДАННЯ №7 (варіант 2)" },
      { href: "./lab-4.9.html", text: "ЗАВДАННЯ №8" },
      { href: "./lab-4.10.html", text: "ЗАВДАННЯ №9 (варіант 2 — Динамічне меню)" },
      { href: "./lab-4.11.html", text: "Висновки" },
    ],
  };

  const items = menus[lab];
  if (!items) return;

  const currentFile = location.pathname.split("/").pop();

  const ul = document.createElement("ul");
  ul.className = "lab-description__list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "lab-description__item";

    const a = document.createElement("a");
    a.className = "lab-description__link";
    a.href = item.href;
    a.textContent = item.text;

    // active
    if (currentFile === item.href.replace("./", "")) {
      li.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  menuRoot.innerHTML = "";
  menuRoot.appendChild(ul);
})();
