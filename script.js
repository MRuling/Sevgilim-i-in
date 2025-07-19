const btn = document.getElementById('SüprizButonu')
const message = document.getElementById('message')
btn.addEventListener("click", () => {
    message.classList.remove("hidden");
    btn.style.display = "none";
})