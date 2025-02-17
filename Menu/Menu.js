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
  const menu = document.createElement('div');
  menu.classList.add('menu')
  const ul = document.createElement('ul');
  menu.appendChild(ul);
  // let ul = document.querySelector('ul')
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.append(li);
    // li.append(arr[i]);
  }
  document.querySelector('.menu-button').addEventListener('click', (event) => {
    menu.classList.toggle('menu--open');
    // Step 5: return the menu component.
  });
  return menu
}

// Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
// Add those items to the <ul>

// Step 3: Using a DOM selector, select the menu button currently on the DOM.

// let menu = document.querySelector('.menu');

// Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

// Step 6: add the menu component to the DOM.

document.querySelector('.header').appendChild(menuCreator(menuItems))
