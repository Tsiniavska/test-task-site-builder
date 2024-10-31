const animateItems = () => {
  const animatedItems = document.querySelectorAll('.animated-item');

  animatedItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, index * 200);
  });
};

export default animateItems;
