export function clearContent(container) {
  container.innerHTML = '';
}

export function socialHover() {
  const icons = document.querySelectorAll('.footer-social i');

  icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('beat');
    });

    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('beat');
    });
  });
}
