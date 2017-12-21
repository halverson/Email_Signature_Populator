document.addEventListener('click', function (e) {
  if (e.target.className === 'addNameBtn') {
    addLI();
  }
});

function addLI () {
  var node = document.createElement('LI');
  node.innerHTML = '<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName"><button type="button" name="addName" class="addNameBtn">+</button>';
  document.getElementById('addNameList').appendChild(node);
}
