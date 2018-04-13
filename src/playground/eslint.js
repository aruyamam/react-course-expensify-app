const bar = 10;

const work = new Promise((resolve, reject) => {
  resolve('Some data');
});

work.then((data) => {
  console.log(data);
});
