var fs = require('fs');
var list = document.getElementById('addNameList');

list.addEventListener('click', function (e) {
  if (e.target.className === 'addNameBtn') {
    addLI();
  } else if (e.target.className === 'delNameBtn') {
    if (list.children.length > 1) {
      delLI(e.target);
    }
  }
});

function addLI () {
  var node = document.createElement('LI');
  node.innerHTML = '<input type="text" name="fullName" value="" placeholder="Name Surname" class="textInput fullName"><button type="button" name="addName" class="addNameBtn">+</button><button type="button" name="delName" class="delNameBtn">x</button>';
  document.getElementById('addNameList').appendChild(node);
}

function delLI (eTarget) {
  eTarget.parentNode.remove();
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

function changeName (srcPath, savePath, name) {
  fs.readFile(srcPath, 'utf8', (err, data) => {
    if (err) throw err;
    var newData = data.replace(/\[NAME\]/m, name);
    fs.writeFile(savePath, newData, (err) => {
      if (err) throw err;
      console.log(name + ' ' + 'complete');
    });
  });
}

function generate () {
  var names = getNames('fullName');
  var path = getTemplate('templatePath');
  console.log(names);
  console.log('File path: ' + path);
  for (var x = 0; x < names.length; x++) {
    changeName(path, 'output/' + names[x] + '.html', names[x]);
  }
}

document.getElementById('genBtn').addEventListener('click', generate);
