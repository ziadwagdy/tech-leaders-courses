// callbcks! => callbacks pyramid hell.

function loadScript(src, callback) {
  let script = document.createElement("script");
  // <script src=></script>
  script.src = src;

  script.onload = () => callback(script);
  script.onerror = () => callback(new Error(`Error Loading ${src}`));
  document.head.append(script);
}


loadScript("js/1.js", function (script, error) {
  if (error) {
    // do something
  } else {
    // loaded!
  }
  loadScript("js/2.js", function (script, error) {
    if (error) {
      // do something
    } else {
      // loaded!
      loadScript("js/2.js", function (script, error) {
        if (error) {
          // do something
        } else {
          // loaded!
          loadScript("js/2.js", function (script, error) {
            if (error) {
              // do something
            } else {
              // loaded!
              loadScript("js/2.js", function (script, error) {
                if (error) {
                  // do something
                } else {
                  // loaded!
                }
              });
            }
          });
        }
      });
    }
  });
});
