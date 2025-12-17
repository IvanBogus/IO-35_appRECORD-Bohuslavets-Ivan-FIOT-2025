(() => {
  // ===== Завдання №1 / Варіант 2 =====
  const products = [
    { id: "p100", name: "Ноутбук", price: 25000, category: "electronics" },
    { id: "p200", name: "Смартфон", price: 12000, category: "electronics" },
    { id: "p300", name: "Навушники", price: 1800, category: "accessories" },
  ];

  function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find((p) => p.id === productId);

    if (!product) {
      errorCallback(`Товар з id "${productId}" не знайдено`);
      return;
    }

    successCallback(product);
  }

  function task1v2() {
    console.log("=== ЛР5 — Завдання №1 (варіант 2) ===");

    const successCallback = (product) => console.log("✅ Знайдено товар:", product);
    const errorCallback = (message) => console.error("❌ Помилка:", message);

    getProductDetails("p200", successCallback, errorCallback);
    getProductDetails("p999", successCallback, errorCallback);
  }

  // ===== Завдання №1 / Варіант 4 =====
  function task1v4() {
    console.log("=== ЛР5 — Завдання №1 (варіант 4) ===");

    const concerts = {
      Київ: new Date("2020-04-01"),
      Умань: new Date("2025-07-02"),
      Вінниця: new Date("2020-04-21"),
      Одеса: new Date("2025-03-15"),
      Хмельницький: new Date("2020-04-18"),
      Харків: new Date("2025-07-10"),
    };

    const now = new Date();

    const cities = Object.entries(concerts)
      .filter(([, date]) => date > now)
      .sort(([, a], [, b]) => a - b)
      .map(([city]) => city);

    console.log("Міста з майбутніми концертами (за датою):", cities);
  }

  // ===== Завдання №1 / Варіант 6 =====
  function task1v6() {
    console.log("=== ЛР5 — Завдання №1 (варіант 6) ===");

    const medicines = [
      { name: "Noshpa", price: 170 },
      { name: "Analgin", price: 55 },
      { name: "Quanil", price: 310 },
      { name: "Alphacholine", price: 390 },
    ];

    const result = medicines.map((m, index) => {
      const discountedPrice = m.price > 300 ? Number((m.price * 0.7).toFixed(2)) : m.price;

      return {
        id: index + 1,
        name: m.name,
        price: discountedPrice,
      };
    });

    console.log("Оновлений масив медикаментів:", result);
  }

  // ===== Завдання №1 / Варіант 8 =====
  function Storage(items) {
    this.items = Array.isArray(items) ? [...items] : [];
  }

  Storage.prototype.getItems = function () {
    return [...this.items];
  };

  Storage.prototype.addItems = function (item) {
    this.items.push(item);
  };

  Storage.prototype.removeItem = function (item) {
    const idx = this.items.indexOf(item);
    if (idx !== -1) this.items.splice(idx, 1);
  };

  function task1v8() {
    console.log("=== ЛР5 — Завдання №1 (варіант 8) ===");

    const arr = ["apple", "banana", "mango"];
    const storage = new Storage(arr);

    console.log("Початкові items:", storage.getItems());

    storage.addItems("kiwi");
    console.log("Після addItems('kiwi'):", storage.getItems());

    storage.removeItem("banana");
    console.log("Після removeItem('banana'):", storage.getItems());

    storage.removeItem("pear");
    console.log("Після removeItem('pear') (не існує):", storage.getItems());
  }

  // ===== Завдання №1 / Варіант 10 =====
  function checkBrackets(str) {
    const stack = [];
    const pairs = { ")": "(", "]": "[", "}": "{" };

    for (const ch of str) {
      if (ch === "(" || ch === "[" || ch === "{") {
        stack.push(ch);
        continue;
      }

      if (ch === ")" || ch === "]" || ch === "}") {
        if (stack.pop() !== pairs[ch]) return false;
      }
    }

    return stack.length === 0;
  }

  function task1v10() {
    console.log("=== ЛР5 — Завдання №1 (варіант 10) ===");
    console.log(checkBrackets("function test() { return [1, 2, 3]; }"));
    console.log(checkBrackets("function fail( { ] }"));
    console.log(checkBrackets("const arr = [1, 2, { x: 3 }];"));
    console.log(checkBrackets("if (x > 0 { return; }"));
  }

  // ===== Завдання №2 / Варіант 2 =====
  function task2v2() {
    console.log("=== ЛР5 — Завдання №2 (варіант 2) ===");

    const people = [
      { name: "John", age: 27 },
      { name: "Jane", age: 31 },
      { name: "Bob", age: 19 },
    ];

    const hasUnder20 = people.some((p) => p.age < 20);
    console.log("Є хоча б один об'єкт з віком < 20?", hasUnder20);
  }

  // ===== Завдання №2 / Варіант 4 =====
  function task2v4() {
    console.log("=== ЛР5 — Завдання №2 (варіант 4) ===");

    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map((n) => n ** 2);

    console.log("Вхідний масив:", numbers);
    console.log("Квадрати:", squares);
  }

  // ===== Завдання №2 / Варіант 6 =====
  function task2v6() {
    console.log("=== ЛР5 — Завдання №2 (варіант 6) ===");

    const users = [
      { name: "John", age: 27 },
      { name: "Jane", age: 31 },
      { name: "Bob", age: 19 },
    ];

    const sorted = [...users].sort((a, b) => a.age - b.age);

    console.log("Вхідний масив:", users);
    console.log("Відсортований (за віком):", sorted);
  }

  window.Lab5 = {
    task1v2,
    task1v4,
    task1v6,
    task1v8,
    task1v10,
    task2v2,
    task2v4,
    task2v6,
  };
})();
