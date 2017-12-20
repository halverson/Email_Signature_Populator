/* function addNameItem () {
  var node = document.createElement('LI');
  var content = document.createTextNode('<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName" /><button type="button" name="addName" id="addNameBtn">+</button>');
  node.appendChild(content);
  document.getElementById('addNameList').appendChild(node);
} */

var addBTN = document.getElementById('addNameBtn');
// addBTN.onclick = addNameItem();
addBTN.onclick = function () {
  addBTN.style.backgroundColor = 'red';
};
