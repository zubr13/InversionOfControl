// Файл, демонстрирующий то, как фреймворк создает среду (песочницу) для
// исполнения приложения, загружает приложение, передает ему песочницу в
// качестве глобального контекста и получает ссылу на экспортируемый
// приложением интерфейс. Читайте README.md в нем задания.

// Фреймворк может явно зависеть от библиотек через dependency lookup
var fs = require('fs'),
    vm = require('vm'),
    util = require('util');

// Создаем контекст-песочницу, которая станет глобальным контекстом приложения
var context = { module: {}, console: console, setInterval: setInterval, setTimeout: setTimeout, util:util,
console:{
  log: function(message){
    var time = new Date();
    var app;
    if(process.argv.length === 3){
      app = process.argv[2];
    }
    else{
      app = "application"
    }
    var date = app + " " + time.getDate() + ":" +(time.getMonth()+1) + ":" + time.getFullYear() + " " + message;
    console.log(date);
    fs.appendFile("input.txt", date + "\n", function(err, info){
      if(err) throw err;
    });
  }
}, require: function(file){
    var result = require(file);
    var time = new Date();
    var date = time.getDate() + ":" +(time.getMonth()+1) + ":" + time.getFullYear() + " " + file;
    fs.appendFile("log.txt", date + "\n", function(err, info){
      if(err) throw err;
    });
    return result;
  }};
context.global = context;
var sandbox = vm.createContext(context);
var fileName;
if(process.argv.length == 3){
  fileName = process.argv[2];
}
else{
  // Читаем исходный код приложения из файла
  fileName = './application.js';
}

fs.readFile(fileName, function(err, src) {
  // Тут нужно обработать ошибки
  
  // Запускаем код приложения в песочнице
  var script = vm.createScript(src, fileName);
  script.runInNewContext(sandbox);
  
  // Забираем ссылку из sandbox.module.exports, можем ее исполнить,
  // сохранить в кеш, вывести на экран исходный код приложения и т.д.
});
