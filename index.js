const { exec } = require("child_process");
const div=()=>{console.log("-".repeat(process.stdout.columns));};

function clean() {
  let blank=()=>{};
  exec("rm -f ./coffeescript.js ./typescript.js ./livescript.js",blank);
}

function fin() {
  div();
  require("./credit.js");
  div();
  clean();
}

function init() {
  div();
  console.log("Compiling...");
  div();
  return new Promise(resolve => {
    exec("npx tsc --outFile ./typescript.js ./typescript.ts",()=>{
      exec("npx coffee -c ./coffeescript.coffee",()=>{
        exec("npx lsc -c ./livescript.ls",()=>{
          resolve(0);
        });
      });
    });
  });
}

function main() {
  init().then(()=>{
    require("./javascript.js");
    require("./typescript.js");
    require("./coffeescript.js");
    require("./livescript.js");

    fin();
  });
}

main();