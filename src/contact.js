export function loadContact(contentDiv) {
  contentDiv.classList.add('contact-container');

  // Create the contact address container
  const contactAddress = document.createElement('div');
  contactAddress.classList.add('contact-address');

  // Create and append address title and text
  const addressTitle = document.createElement('h2');
  addressTitle.textContent = 'Address';

  const addressText = document.createElement('p');
  addressText.textContent = '1234 Pizza Lane, Flavor Town, CA 90210';

  // Create and append map container
  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  contactAddress.appendChild(addressTitle);
  contactAddress.appendChild(addressText);
  contactAddress.appendChild(mapContainer);

  // Create the contact form container
  const contactForm = document.createElement('div');
  contactForm.classList.add('contact-form');

  const contactFormTitle = document.createElement('h2');

  contactFormTitle.textContent = 'Contact us';

  // Create and append form elements
  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.required = true;

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.required = true;

  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';
  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.required = true;

  const sendButton = document.createElement('button');
  sendButton.type = 'submit';
  sendButton.textContent = 'Send';

  // Append form elements to the form
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(sendButton);

  // Append form to the contact form container
  contactForm.appendChild(contactFormTitle);
  contactForm.appendChild(form);

  // Append the contact address to the content div
  contentDiv.appendChild(contactAddress);

  // Append the contact form container to the contentDiv
  contentDiv.appendChild(contactForm);

  // Initialize the map
  initMap();
}

// Initialize and add the map

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 46.96546075433057, lng: 18.940718226027396 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  // The map, centered at Uluru
  map = new Map(document.getElementById('map'), {
    zoom: 12,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Uluru',
  });
}
