var addBTN = document.getElementsByClassName('addNameBtn');

for (var i = 0; i < addBTN.length; i++) {
  addBTN[i].addEventListener('click', function () {
    var node = document.createElement('LI');
    node.setAttribute('id', 'addNameItem');
    node.innerHTML = '<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName"> <button type="button" name="addName" class="addNameBtn">+</button>';
    document.getElementById('addNameList').appendChild(node);
  });
  console.log(addBTN);
}

/* addBTN.addEventListener('click', function () {
  var node = document.createElement('LI');
  node.setAttribute('id', 'addNameItem');
  node.innerHTML = '<input type="text" name="fullName" value="" placeholder="Name Surname" id="fullName"> <button type="button" name="addName" class="addNameBtn">+</button>';
  document.getElementById('addNameList').appendChild(node);
}); */
