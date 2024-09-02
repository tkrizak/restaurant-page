import margherita from './images/pizzas/margherita.png';
import pepperoni from './images/pizzas/pepperoni.png';

export function loadMenu(contentDiv) {
  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  const menuItems = [
    {
      name: 'Margherita',
      image: margherita,
      description:
        'Classic Margherita with fresh mozzarella, tomatoes, and basil.',
    },
    {
      name: 'Pepperoni',
      image: pepperoni,
      description: 'Loaded with spicy pepperoni and mozzarella cheese.',
    },
    {
      name: 'Margherita',
      image: margherita,
      description:
        'Classic Margherita with fresh mozzarella, tomatoes, and basil.',
    },
    {
      name: 'Pepperoni',
      image: pepperoni,
      description: 'Loaded with spicy pepperoni and mozzarella cheese.',
    },
    {
      name: 'Margherita',
      image: margherita,
      description:
        'Classic Margherita with fresh mozzarella, tomatoes, and basil.',
    },
    {
      name: 'Pepperoni',
      image: pepperoni,
      description: 'Loaded with spicy pepperoni and mozzarella cheese.',
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const pizzaName = document.createElement('h2');
    pizzaName.textContent = item.name;

    const pizzaImg = document.createElement('img');
    pizzaImg.classList.add('pizza-img');
    pizzaImg.src = item.image;
    pizzaImg.alt = item.name;

    const pizzaDescription = document.createElement('p');
    pizzaDescription.textContent = item.description;

    menuItem.appendChild(pizzaName);
    menuItem.appendChild(pizzaImg);
    menuItem.appendChild(pizzaDescription);

    menuGrid.appendChild(menuItem);
  });

  contentDiv.appendChild(menuGrid);
}
