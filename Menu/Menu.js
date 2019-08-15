/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/
  // Pass the function an array as it's only argument.

function menuCreator (arr) {
  const header = document.querySelector('.header');
  const menu = document.createElement('div');
  menu.classList.add('menu')
  header.appendChild(menu);
  const ul = document.createElement('ul');
  menu.appendChild(ul);
}

menuCreator(menuItems);

// Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
// Add those items to the <ul>
let ul = document.querySelector('ul')
for (let i = 0; i < menuItems.length; i++) {
  let li = document.createElement('li');
  ul.append(li);
  li.append(menuItems[i]);
}

// Step 3: Using a DOM selector, select the menu button currently on the DOM.

let menuButton = document.querySelector('.menu-button');

// Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

menuButton.addEventListener('click', (event) => {
  event.menuButton.classList.add('menu--open');
  // Step 5: return the menu component.
  return menuButton;
});
// Step 6: add the menu component to the DOM.
menu.appendChild(menuButton);