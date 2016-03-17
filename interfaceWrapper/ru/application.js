// Вывод из глобального контекста модуля
console.log('From application global context');

// Объявляем функцию для события таймера
function timerEvent() {
  console.log('From application timer event');
}

// Устанавливаем функцию на таймер
//setTimeout(timerEvent, 1000);

var fileName = './README.md';
console.log('Application going to read ' + fileName);
fs.readFile(fileName, function(err, src) {
  console.log('File ' + fileName + ' size ' + src.length);
});

fs.writeFile("new.txt", "something", function(){
  console.log("Callback from writefile");
});