// Activate dropdown

$(document).ready(function () {
  $('.dropdown-toggle').dropdown();
});


// Pages to bring up
const listSection = document.getElementById('list');
const addBookSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');

const listNav = document.querySelector('.list');
const addBookNav = document.querySelector('.add-book');
const contactNav = document.querySelector('.contact');

listSection.style.display = 'none';
addBookSection.style.display = 'block';
contactSection.style.display = 'none';

listNav.onclick = function () {
  listSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

addBookNav.onclick = function () {
  listSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
};

contactNav.onclick = function () {
  listSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
};
