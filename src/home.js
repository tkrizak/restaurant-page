import restaurant from './images/restaurant.jpg';

export function loadHome(contentDiv) {
  contentDiv.classList.remove('contact-container');

  const contentHome = document.createElement('div');
  contentHome.classList.add('content-home');

  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Pizza Paradise';

  const description = document.createElement('p');
  description.textContent = `
    At Pizza Paradise, we believe in serving the best pizza in town. Our
    pizzas are crafted with the finest ingredients, from the freshest
    vegetables to the highest quality cheese and meats. Whether you're a fan
    of classic Margherita or adventurous gourmet toppings, we have something
    to satisfy every craving. Join us for a slice of heaven and experience
    the true taste of Italy, right in the heart of your neighborhood.`;

  const restaurantImg = document.createElement('img');
  restaurantImg.classList.add('restaurant-img');
  restaurantImg.src = restaurant;

  const order = document.createElement('p');
  order.textContent = `To place an order, please contact us directly. We look forward to serving you!`;

  contentHome.appendChild(h1);
  contentHome.appendChild(description);
  contentHome.appendChild(restaurantImg);
  contentHome.appendChild(order);

  contentDiv.appendChild(contentHome);
}
