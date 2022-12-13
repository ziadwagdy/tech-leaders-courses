// let promise = new Promise(function(resolve, reject) {
//     resolve(value);
//     reject(error);
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("Done!"), 2000);
// });

// promise
//   .then(
//     // when there is a resolve / fulfilled
//     function (result) {
//       console.log(result);
//     },
//     function (error) {
//       console.log(`error is ${error}`);
//     }
//   )
//   .catch();
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
  script => alert(`${script.src} is loaded!`), 
  error => alert(`Error: ${error.message}`)
);
