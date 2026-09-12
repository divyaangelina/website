```js
const toggle = document.getElementById("themeToggle");

// Dark mode is the default
document.body.classList.add("dark");

function updateIcon() {
  toggle.textContent = document.body.classList.contains("dark") ? "☾" : "☼";

  toggle.setAttribute(
    "aria-label",
    document.body.classList.contains("dark")
      ? "Switch to light mode"
      : "Switch to dark mode"
  );
}

updateIcon();

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});
```