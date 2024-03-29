// Mengatur tema dark mode dengan checkbox
const checkBox = document.querySelector("#switch");
checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

// Mengubah style class navbar saat discroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 10) {
    navbar.classList.add(
      "bg-slate-500",
      "bg-opacity-10",
      "backdrop-filter",
      "backdrop-blur-md",
      "shadow-md"
    );
    navbar.classList.remove("shadow-none");
  } else {
    navbar.classList.remove(
      "bg-slate-500",
      "bg-opacity-10",
      "backdrop-filter",
      "backdrop-blur-md",
      "shadow-md"
    );
    navbar.classList.add("shadow-none");
  }
});

// Menambahkan event listener untuk menyesuaikan posisi navbar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const navHeight = document.querySelector("nav").offsetHeight;

      // Mendapatkan posisi elemen target
      const id = this.getAttribute("href");
      const targetElement = document.getElementById(id.substring(1));
      const targetPosition = targetElement.offsetTop;

      const scrollToPosition = targetPosition - navHeight - 15;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    });
  });
});
