let count = 0;
const countOutput = document.querySelector("#count");
document.querySelector("#decrease").onclick = () => { countOutput.value = --count; };
document.querySelector("#increase").onclick = () => { countOutput.value = ++count; };
document.querySelector("#reset").onclick = () => { countOutput.value = count = 0; };
document.querySelector("#name").oninput = (event) => {
  document.querySelector("#greeting").value = "Hello, " + (event.target.value.trim() || "stranger") + "!";
};
document.querySelector("#mode").onclick = (event) => {
  const active = document.body.classList.toggle("dark");
  event.currentTarget.setAttribute("aria-pressed", String(active));
  event.currentTarget.textContent = active ? "Dark mode on" : "Dark mode off";
};
