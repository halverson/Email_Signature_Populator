document.addEventListener('click', function (e) {
  if (e.target.className === 'addNameBtn') {
    addLI();
  }
});

function addLI () {
  var node = document.createElement('LI');
  node.innerHTML = '<input type="text" name="fullName" value="" placeholder="Name Surname" class="fullName"><button type="button" name="addName" class="addNameBtn">+</button>';
  document.getElementById('addNameList').appendChild(node);
}

function getNames (elem) {
  var namesList = document.getElementsByClassName(elem);
  var namesFinal = [];
  for (var i = 0; i < namesList.length; i++) {
    namesFinal[i] = namesList[i].value;
  }
  return namesFinal;
}

function getTemplate (elem) {
  var input = document.getElementById(elem);
  if (input.value !== '') {
    return input.value;
  } else {
    return '';
  }
}

function generate () {
  var names = getNames('fullName');
  var path = getTemplate('templatePath');
  console.log(names);
  console.log('File path: ' + path);
}

document.getElementById('genBtn').addEventListener('click', generate);
