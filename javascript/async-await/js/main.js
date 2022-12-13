// xhr XMLHttpRequest -> AJAX
// Async/Await
// async -> makes a function return a promise.
const myFunction = async () => {
  // this function returns a promise!
  let myPromise = new Promise(function (resolve, reject) {
    resolve("This is a text from a promise!");
  });

  myPromise.then((result) => {
    console.log(result);
  });

  // await -> waiting a promise result!!!
  let result = await myPromise;
  console.log(result);
};


myFunction();
