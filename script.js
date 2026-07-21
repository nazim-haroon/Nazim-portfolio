const theme = document.getElementById("theme");

theme.onclick = () => {
    document.body.classList.toggle("dark");
    theme.classList.toggle("fa-sun");
};