const promise = new Promise((resolve, reject) => {
  // resolve('This is my resolved data');
  reject('something went wrong');
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error('error: ' + error);
});