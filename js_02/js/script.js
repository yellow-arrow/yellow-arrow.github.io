//check user name
var userNames = [];
var found = false;
for (var i = 0; i <= 4; i++) {
  userNames[i] = prompt('Please enter 5 names',i+1);
}

var yourName = prompt('Enter your name','');

for (var j = 0; j <= 4; j++) {
  if (userNames[j] === yourName){
	found = yourName;
	alert(found + ' , вы успешно вошли');
  }
}

if (found != yourName) {
  alert('Пользователь не найден');
}