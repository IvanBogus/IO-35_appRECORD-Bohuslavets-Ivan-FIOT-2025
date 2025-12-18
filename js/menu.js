// js/menu.js
(function () {
  const menuRoot = document.querySelector("#lab-menu");
  if (!menuRoot) return;

  
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

    "5": [
      { href: "./lab-5.1.html", text: "Тема, мета ЛР №5. Місце розташування сайту, звіту" },

      { href: "./lab-5.2.html", text: "Завдання №1 (варіант 2) — getProductDetails + callbacks" },
      { href: "./lab-5.3.html", text: "Завдання №1 (варіант 4) — concerts (міста майбутніх концертів)" },
      { href: "./lab-5.4.html", text: "Завдання №1 (варіант 6) — medicines (-30% якщо >300) + id" },
      { href: "./lab-5.5.html", text: "Завдання №1 (варіант 8) — Storage (get/add/remove)" },
      { href: "./lab-5.6.html", text: "Завдання №1 (варіант 10) — checkBrackets" },

      { href: "./lab-5.7.html", text: "Завдання №2 (варіант 2) — some() (вік < 20)" },
      { href: "./lab-5.8.html", text: "Завдання №2 (варіант 4) — map() (квадрати)" },
      { href: "./lab-5.9.html", text: "Завдання №2 (варіант 6) — sort() (за віком)" },

      { href: "./lab-5.10.html", text: "Висновки" },
    ],

    "6": [
      { href: "./lab-6.1.html", text: "Тема, мета ЛР №6. Місце розташування сайту, звіту" },
      { href: "./lab-6.2.html", text: "ЗАВДАННЯ №2 — SWAP ME" },
      { href: "./lab-6.3.html", text: "ЗАВДАННЯ №4 — Квадрат +/- 15px" },
      { href: "./lab-6.4.html", text: "ЗАВДАННЯ №6 — Подвоєння значень списку" },
      { href: "./lab-6.5.html", text: "ЗАВДАННЯ №8 — Форма логіна" },
      { href: "./lab-6.6.html", text: "ЗАВДАННЯ №10 — Create/Destroy boxes" },
      { href: "./lab-6.7.html", text: "Висновки" },
    ],

    "7": [
      { href: "./lab-7.1.html", text: "Тема, мета ЛР №7. Місце розташування сайту, звіту" },
      { href: "./lab-7.2.html", text: "ЗАВДАННЯ №1 — Кошик + пагінація" },
      { href: "./lab-7.3.html", text: "ЗАВДАННЯ №2 — Галерея + форма (localStorage)" },
      { href: "./lab-7.4.html", text: "ЗАВДАННЯ №3 — Таймер (flatpickr + iziToast)" },
      { href: "./lab-7.5.html", text: "ЗАВДАННЯ №4 — Генератор промісів (iziToast)" },
      { href: "./lab-7.6.html", text: "ЗАВДАННЯ №5 — Пошук зображень (Pixabay + SimpleLightbox)" },
      { href: "./lab-7.7.html", text: "Висновки" },
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

    if (currentFile === item.href.replace("./", "")) {
      li.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  menuRoot.innerHTML = "";
  menuRoot.appendChild(ul);
})();
