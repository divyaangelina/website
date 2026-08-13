const toggle=document.getElementById("themeToggle");

function updateIcon(){
  toggle.textContent=document.body.classList.contains("dark")?"☾":"☼";
  toggle.setAttribute(
    "aria-label",
    document.body.classList.contains("dark") ? "Switch to light mode" : "Switch to dark mode"
  );
}

updateIcon();

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  updateIcon();
});
