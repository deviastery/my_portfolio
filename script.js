// Обработчик клика для фото
const mainPhoto = document.getElementById("photo");
let isPhoto2 = false;

mainPhoto.addEventListener("click", () => {
  if (isPhoto2) {
    mainPhoto.src = "img/photo.jpg";
    isPhoto2 = false;
  } else {
    mainPhoto.src = "img/photo2.jpg";
    isPhoto2 = true;
  }
});

// Обработчик прокрутки для кнопки "Вверх"
const scrollToTopButton = document.getElementById("button_scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Обработчик alert для кнопок стека
const stackButtons = document.querySelectorAll(".stack_button");

stackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const info = button.dataset.info;
    alert(info);
  });
});

// Обработчик кнопки переключения темы
const themeToggle = document.getElementById("theme_toggle");
const body = document.body;
let isDarkTheme = false;

themeToggle.addEventListener("click", () => {
  isDarkTheme = !isDarkTheme;
  body.classList.toggle("dark_theme");
  if (isDarkTheme) {
    themeToggle.textContent = "Переключить на светлую тему";
  } else {
    themeToggle.textContent = "Переключить на темную тему";
  }
});
