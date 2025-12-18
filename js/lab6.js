(() => {
  function byId(id) {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Не знайдено елемент #${id}`);
    return el;
  }

  // ===== Варіант 2 — SWAP ME =====
  function initTask2() {
    const input1 = byId("swap-input-1");
    const input2 = byId("swap-input-2");
    const btn = byId("swap-btn");

    btn.addEventListener("click", () => {
      const tmp = input1.value;
      input1.value = input2.value;
      input2.value = tmp;
    });
  }

  // ===== Варіант 4 — Квадрат +/- 15px =====
  function initTask4() {
    const box = byId("size-box");
    const dec = byId("btn-decrease");
    const inc = byId("btn-increase");

    const step = 15;

    const getSize = () => ({
      w: box.offsetWidth,
      h: box.offsetHeight,
    });

    const setSize = (w, h) => {
      box.style.width = `${w}px`;
      box.style.height = `${h}px`;
    };

    inc.addEventListener("click", () => {
      const { w, h } = getSize();
      setSize(w + step, h + step);
    });

    dec.addEventListener("click", () => {
      const { w, h } = getSize();
      const nextW = Math.max(step, w - step);
      const nextH = Math.max(step, h - step);
      setSize(nextW, nextH);
    });
  }

  // ===== Варіант 6 — Подвоїти значення списку =====
  function initTask6() {
    const list = byId("number-list");
    const btn = byId("double-btn");

    btn.addEventListener("click", () => {
      const items = list.querySelectorAll("li");
      items.forEach((li) => {
        const n = Number(li.textContent.trim());
        if (!Number.isFinite(n)) return;
        li.textContent = String(n * 2);
      });
    });
  }

  // ===== Варіант 8 — Login form =====
  function initTask8() {
    const form = document.querySelector(".login-form");
    if (!form) throw new Error("Не знайдено форму .login-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();

      if (!email || !password) {
        alert("Усі поля повинні бути заповнені!");
        return;
      }

      const data = { email, password };
      console.log("Дані форми:", data);

      form.reset();
    });
  }

  // ===== Варіант 10 — Create/Destroy boxes =====
  function initTask10() {
    const input = byId("controls-amount");
    const btnCreate = byId("btn-create");
    const btnDestroy = byId("btn-destroy");
    const boxes = byId("boxes");

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomColor = () => `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;

    const destroyBoxes = () => {
      boxes.innerHTML = "";
    };

    const createBoxes = (amount) => {
      destroyBoxes();

      const fragment = document.createDocumentFragment();
      let size = 30;

      for (let i = 0; i < amount; i += 1) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = randomColor();
        div.style.borderRadius = "4px";
        fragment.appendChild(div);
        size += 10;
      }

      boxes.appendChild(fragment);
    };

    btnCreate.addEventListener("click", () => {
      const value = Number(input.value);

      if (!Number.isInteger(value) || value < 1 || value > 100) {
        alert("Введіть ціле число від 1 до 100");
        return;
      }

      createBoxes(value);
    });

    btnDestroy.addEventListener("click", () => {
      destroyBoxes();
      input.value = "";
    });
  }

  window.Lab6 = { initTask2, initTask4, initTask6, initTask8, initTask10 };
})();
