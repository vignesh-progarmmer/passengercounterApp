let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");
let count = 0; // intializilation

function increment() {
  // create a function
  count += 1; // add a increment "1"
  countEl.innerHTML = count; // replace the value in the innerHtml
}

function save() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}
