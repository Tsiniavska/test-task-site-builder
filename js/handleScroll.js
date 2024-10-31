const handleScroll = () => {
  const header = document.getElementById('header');

  const toggleHeaderClass = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Додаємо подію скролінгу
  window.addEventListener('scroll', toggleHeaderClass);
};

export default handleScroll;
