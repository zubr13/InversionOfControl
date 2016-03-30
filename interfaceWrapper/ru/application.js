// Вывод из глобального контекста модуля
console.log('From application global context');

// Объявляем функцию для события таймера
function timerEvent() {
  console.log('From application timer event');
}

// Устанавливаем функцию на таймер
//setTimeout(timerEvent, 1000);

var fileName = './README.md';

var read = function () {
  console.log('Application going to read ' + fileName);
  fs.readFile(fileName, function(err, src) {
    console.log('File ' + fileName + ' size ' + src.length);
  });
}

var fileName2 = "new.txt";
var write = function(){
  console.log("Writing file " + fileName2);
  fs.writeFile(fileName2, "something", function(){
    console.log("Callback from writefile");
  });
}

setInterval(read, 5000);
setInterval(write, 6000);