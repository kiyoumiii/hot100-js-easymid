var fs = require('fs');
  

fs.readFile('input.txt', function (err, data) {
if (err) {
    return console.error(err);
}
console.log('异步读取: ' + data.toString());
});

function promisify(fn) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };
  }
  
  
promisify(fs.readFile)('input.txt')
.then((data) => {
    console.log('异步读取: ' + data.toString());
})
.catch((err) => {
    console.error(err);
});