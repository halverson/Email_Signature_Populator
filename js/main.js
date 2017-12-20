/* function addNameItem () {
  var node = document.createElement('LI');
  var content = document.createTextNode('<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName" /><button type="button" name="addName" id="addNameBtn">+</button>');
  node.appendChild(content);
  document.getElementById('addNameList').appendChild(node);
} */

function createHTMLelem (htmlStr) {
  var frag = document.createDocumentFragment();
  var temp = document.createElement('li');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

var addBTN = document.getElementById('addNameBtn');

var fragment = createHTMLelem('<li id="addNameItem"><input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName" /> <button type="button" name="addName" id="addNameBtn">+</button></li>');

addBTN.onclick = function () {
  console.log('Click!');
  document.getElementById('addNameList').appendChild(fragment);
};

/* addBTN.onclick = function () {
  var list = document.getElementById('addNameList');
  var node = document.createElement('LI');
  var content = document.createTextNode('<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName" /><button type="button" name="addName" id="addNameBtn">+</button>');
  node.appendChild(content);
  list.appendChild(node);
}; */
