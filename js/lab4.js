// js/lab4.js
(function () {
  const file = location.pathname.split("/").pop(); // lab-4.2.html ...
  const taskByFile = {
    "lab-4.2.html": 1,
    "lab-4.3.html": 2,
    "lab-4.4.html": 3,
    "lab-4.5.html": 4,
    "lab-4.6.html": 5,
    "lab-4.7.html": 6,
    "lab-4.8.html": 7,
    "lab-4.9.html": 8,
    "lab-4.10.html": 9,
  };

  const taskNo = taskByFile[file];
  if (!taskNo) return;

  // --- helpers ---
  function setCode(id, code) {
    const el = document.getElementById(id);
    if (el) el.textContent = code.trim();
  }

  // ===================== TASK 1 =====================
  function task1() {
    const code = `
const input = prompt("Введіть час у форматі год:хв (наприклад 10:30):");
if (input !== null) {
  const match = input.trim().match(/^(\\d{1,2}):(\\d{2})$/);
  if (!match) {
    alert("Невірний формат. Приклад: 10:30");
  } else {
    const hh = Number(match[1]);
    const mm = Number(match[2]);

    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
      alert("Некоректний час.");
    } else {
      const hour = \`\${String(hh).padStart(2,"0")}:\${String(mm).padStart(2,"0")}\`;
      console.log(\`Введений час: \${hour}\`);

      let quarter = "";
      if (mm <= 14) quarter = "Перша чверть години";
      else if (mm <= 29) quarter = "Друга чверть години";
      else if (mm <= 44) quarter = "Третя чверть години";
      else quarter = "Четверта чверть години";

      alert(quarter);
    }
  }
}
`;
    setCode("code-task-1", code);

    const input = prompt("Введіть час у форматі год:хв (наприклад 10:30):");
    if (input === null) return;

    const match = input.trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return alert("Невірний формат. Приклад: 10:30");

    const hh = Number(match[1]);
    const mm = Number(match[2]);

    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return alert("Некоректний час.");

    const hour = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
    console.log(`Введений час: ${hour}`);

    let quarter = "";
    if (mm <= 14) quarter = "Перша чверть години";
    else if (mm <= 29) quarter = "Друга чверть години";
    else if (mm <= 44) quarter = "Третя чверть години";
    else quarter = "Четверта чверть години";

    alert(quarter);
  }

  // ===================== TASK 2 =====================
  function task2() {
    const code = `
const day = prompt("Введіть число дня тижня (1..7):");
let finish;

switch (day) {
  case "1": finish = "понеділок"; break;
  case "2": finish = "вівторок"; break;
  case "3": finish = "середа"; break;
  case "4": finish = "четвер"; break;
  case "5": finish = "п’ятниця"; break;
  case "6": finish = "субота"; break;
  case "7": finish = "неділя"; break;
  default: finish = "Невірне значення"; break;
}

console.log(\`finish: \${finish}\`);
`;
    setCode("code-task-2", code);

    const day = prompt("Введіть число дня тижня (1..7):");
    let finish;

    switch (day) {
      case "1": finish = "понеділок"; break;
      case "2": finish = "вівторок"; break;
      case "3": finish = "середа"; break;
      case "4": finish = "четвер"; break;
      case "5": finish = "п’ятниця"; break;
      case "6": finish = "субота"; break;
      case "7": finish = "неділя"; break;
      default: finish = "Невірне значення"; break;
    }

    console.log(`finish: ${finish}`);
  }

  // ===================== TASK 3 =====================
  function task3() {
    const code = `
const users = {
  User1: "pass1",
  User2: "pass2",
  User3: "pass3",
};

while (true) {
  const login = prompt("Введіть логін (User1, User2 або User3):");

  if (login === null || login.trim() === "") {
    continue; // Cancel або порожньо — знов просимо логін
  }

  console.log(\`Login entered: \${login}\`);

  if (!(login in users)) {
    alert("I don't know you");
    break;
  }

  const password = prompt("Введіть пароль:");
  if (password !== null && password === users[login]) {
    alert(\`Hello, \${login}\`);
  } else {
    alert("I don't know you");
  }
  break;
}
`;
    setCode("code-task-3", code);

    const users = { User1: "pass1", User2: "pass2", User3: "pass3" };

    while (true) {
      const login = prompt("Введіть логін (User1, User2 або User3):");
      if (login === null || login.trim() === "") continue;

      console.log(`Login entered: ${login}`);

      if (!(login in users)) {
        alert("I don't know you");
        break;
      }

      const password = prompt("Введіть пароль:");
      if (password !== null && password === users[login]) alert(`Hello, ${login}`);
      else alert("I don't know you");

      break;
    }
  }

  // ===================== TASK 4 =====================
  function task4() {
    const code = `
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return \`Shipping to \${country} will cost \${totalPrice} credits\`;
}

console.log(getShippingMessage("Ukraine", 100, 20));
console.log(getShippingMessage("Poland", 200, 50));
`;
    setCode("code-task-4", code);

    function getShippingMessage(country, price, deliveryFee) {
      const totalPrice = price + deliveryFee;
      return `Shipping to ${country} will cost ${totalPrice} credits`;
    }

    console.log(getShippingMessage("Ukraine", 100, 20));
    console.log(getShippingMessage("Poland", 200, 50));
  }

  // ===================== TASK 5 =====================
  function task5() {
    const code = `
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) return "Insufficient funds!";
  return \`You ordered \${quantity} droids worth \${totalPrice} credits!\`;
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(10, 3000, 23000));
`;
    setCode("code-task-5", code);

    function makeTransaction(quantity, pricePerDroid, customerCredits) {
      const totalPrice = quantity * pricePerDroid;
      if (totalPrice > customerCredits) return "Insufficient funds!";
      return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }

    console.log(makeTransaction(5, 3000, 23000));
    console.log(makeTransaction(10, 3000, 23000));
  }

  // ===================== TASK 6 =====================
  function task6() {
    const code = `
function makeArray(firstArray, secondArray, maxLength) {
  const combined = firstArray.concat(secondArray);
  return combined.length > maxLength ? combined.slice(0, maxLength) : combined;
}

console.log(makeArray([1,2,3], [4,5,6], 10));
console.log(makeArray([1,2,3], [4,5,6], 4));
`;
    setCode("code-task-6", code);

    function makeArray(firstArray, secondArray, maxLength) {
      const combined = firstArray.concat(secondArray);
      return combined.length > maxLength ? combined.slice(0, maxLength) : combined;
    }

    console.log(makeArray([1, 2, 3], [4, 5, 6], 10));
    console.log(makeArray([1, 2, 3], [4, 5, 6], 4));
  }

  // ===================== TASK 7 (Variant 2) =====================
  function task7() {
    const code = `
const n = Number(prompt("Введіть кількість елементів масиву (>=1):"));
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(prompt(\`Введіть елемент #\${i + 1}:\`)));
}

console.log("Вхідний масив:", arr);

// сума елементів з парними індексами (0,2,4...)
let sumEvenIdx = 0;
for (let i = 0; i < arr.length; i += 2) sumEvenIdx += arr[i];

// max серед парних індексів
let maxEvenVal = -Infinity;
let maxEvenIdx = -1;
for (let i = 0; i < arr.length; i += 2) {
  if (arr[i] > maxEvenVal) {
    maxEvenVal = arr[i];
    maxEvenIdx = i;
  }
}

// min серед непарних індексів (1,3,5...)
let minOddVal = Infinity;
let minOddIdx = -1;
for (let i = 1; i < arr.length; i += 2) {
  if (arr[i] < minOddVal) {
    minOddVal = arr[i];
    minOddIdx = i;
  }
}

console.log("Сума елементів з парними індексами:", sumEvenIdx);
console.log(\`Максимальний серед парних індексів: \${maxEvenVal} (індекс \${maxEvenIdx})\`);
if (minOddIdx === -1) {
  console.log("Немає елементів з непарними індексами (масив має довжину 1).");
} else {
  console.log(\`Мінімальний серед непарних індексів: \${minOddVal} (індекс \${minOddIdx})\`);
}

// сортування за зростанням
const sorted = [...arr].sort((a, b) => a - b);
console.log("Вихідний масив (відсортований):", sorted);
`;
    setCode("code-task-7", code);

    const n = Number(prompt("Введіть кількість елементів масиву (>=1):"));
    if (!Number.isFinite(n) || n < 1) return alert("Некоректна кількість елементів.");

    const arr = [];
    for (let i = 0; i < n; i++) arr.push(Number(prompt(`Введіть елемент #${i + 1}:`)));

    console.log("Вхідний масив:", arr);

    let sumEvenIdx = 0;
    for (let i = 0; i < arr.length; i += 2) sumEvenIdx += arr[i];

    let maxEvenVal = -Infinity;
    let maxEvenIdx = -1;
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] > maxEvenVal) {
        maxEvenVal = arr[i];
        maxEvenIdx = i;
      }
    }

    let minOddVal = Infinity;
    let minOddIdx = -1;
    for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] < minOddVal) {
        minOddVal = arr[i];
        minOddIdx = i;
      }
    }

    console.log("Сума елементів з парними індексами:", sumEvenIdx);
    console.log(`Максимальний серед парних індексів: ${maxEvenVal} (індекс ${maxEvenIdx})`);
    if (minOddIdx === -1) console.log("Немає елементів з непарними індексами (масив має довжину 1).");
    else console.log(`Мінімальний серед непарних індексів: ${minOddVal} (індекс ${minOddIdx})`);

    const sorted = [...arr].sort((a, b) => a - b);
    console.log("Вихідний масив (відсортований):", sorted);
  }

  // ===================== TASK 8 =====================
  function task8() {
    const code = `
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2D масив 3x4 випадкових чисел [-50..50]
const rows = 3;
const cols = 4;
const matrix = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => randInt(-50, 50))
);

console.log("Початковий 2D масив:", matrix);

// перший і останній елемент (по розгортці)
const flat = matrix.flat();
const firstEl = flat[0];
const lastEl = flat[flat.length - 1];
console.log("Перший елемент:", firstEl);
console.log("Останній елемент:", lastEl);

// вставити 25 після другого елемента (індекс 1) у розгортці
flat.splice(2, 0, 25);

// зібрати назад у 2D (той самий розмір: rows x cols, але елементів стало +1 => останній ряд може “розширитись”)
const updated = [];
let idx = 0;
for (let r = 0; r < rows; r++) {
  updated.push(flat.slice(idx, idx + cols));
  idx += cols;
}
if (idx < flat.length) updated.push(flat.slice(idx)); // хвіст, якщо лишився

console.log("Оновлений масив:", updated);
`;
    setCode("code-task-8", code);

    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rows = 3;
    const cols = 4;
    const matrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => randInt(-50, 50))
    );

    console.log("Початковий 2D масив:", matrix);

    const flat = matrix.flat();
    const firstEl = flat[0];
    const lastEl = flat[flat.length - 1];
    console.log("Перший елемент:", firstEl);
    console.log("Останній елемент:", lastEl);

    flat.splice(2, 0, 25);

    const updated = [];
    let idx = 0;
    for (let r = 0; r < rows; r++) {
      updated.push(flat.slice(idx, idx + cols));
      idx += cols;
    }
    if (idx < flat.length) updated.push(flat.slice(idx));

    console.log("Оновлений масив:", updated);
  }

  // ===================== TASK 9 =====================
  // У тебе це окремо реалізовано через menu.js (динамічне меню для сторінок ЛР4),
  // тому тут тільки показ коду-пояснення у pre.
  function task9() {
    const code = `// Динамічне меню реалізовано у файлі ../js/menu.js
// Пункти меню задаються у статичному масиві menus["4"]
// При відкритті сторінки menu.js визначає поточний файл і підсвічує active.
`;
    setCode("code-task-9", code);
    console.log("Завдання №9: меню реалізовано у ../js/menu.js");
  }

  // run only current task
  const runners = {
    1: task1,
    2: task2,
    3: task3,
    4: task4,
    5: task5,
    6: task6,
    7: task7,
    8: task8,
    9: task9,
  };

  runners[taskNo]?.();
})();
