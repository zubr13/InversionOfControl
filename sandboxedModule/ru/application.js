// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
var fs = require("fs");
var vm = require('vm');
console.log('From application global context');

setTimeout(function(){
  console.log("Hello from timer");
}, 1000);

console.log(util.isBoolean(1));

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};
